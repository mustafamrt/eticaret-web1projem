import { Button } from "@material-tailwind/react";
import CourselData from "../data/courselData";
import { useState, useEffect } from "react";

function HomeCourselTemplate({ img, title, desc, button, onSelectHandel, onStopHandel }) {
    return (
        <>
            <div
                onMouseEnter={() => onStopHandel("pause")}
                onMouseLeave={() => onStopHandel("resume")}
                className="bg-[#ffff] rounded-md bg-no-repeat bg-cover min-h-[20vh] text-center"
                style={{
                    backgroundPosition: "center center",
                    backgroundImage: "url('" + img + "')",
                }}
            >
                <div className="py-12 shadow-xl">
                    <div className="md:flex md:mx-5 mx-0 border border-2xl " style={{backdropFilter: "blur(50px)"}}>
                        <div className="md:w-2/3 p-4 sm:w-full sm:block">
                            <img src={img} className="rounded-xl m-auto" />
                        </div>
                        <div className="md:w-1/3 p-4 text-2xl">
                            <h2 className="pt-10">{title}</h2>
                            <p className="font-bold pt-4">{desc}</p>
                            <Button className="md:mt-[25%] sm:mt-5">{button}</Button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pb-3" style={{ backdropFilter: "blur(25px)" }} >
                    {CourselData.map((item, index) => {
                        return (<div key={index} className="w-24 h-12 bg-blue-500 m-2" onClick={() => { onSelectHandel(index) }}>
                            <img src={item.img} alt="" />
                        </div>)
                    })}

                </div>
            </div>
        </>
    );
}

function HomeCoursel() {

    const [selectCoursel, setSelectCoursel] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId;

        const handleInterval = () => {
            if (!isPaused) {
                if (selectCoursel === CourselData.length - 1) {
                    setSelectCoursel(0);
                } else {
                    setSelectCoursel((prevSelect) => prevSelect + 1);
                }
            }
        };

        intervalId = setInterval(handleInterval, 4000);

        return () => clearInterval(intervalId);
    }, [isPaused, selectCoursel]);

    const handleMouseAction = (action) => {
        if (action === "pause") {
            setIsPaused(true);
        } else if (action === "resume") {
            setIsPaused(false);
        }
    };

    return (
        <>
            <HomeCourselTemplate
                title={CourselData[selectCoursel].text}
                desc={CourselData[selectCoursel].desc}
                button={CourselData[selectCoursel].button}
                img={CourselData[selectCoursel].img}
                onSelectHandel={(e) => {
                    setSelectCoursel(e);
                }}
                onStopHandel={(e) => { handleMouseAction(e) }}
            />
        </>
    );
}

export default HomeCoursel;
