import { Button } from "@material-tailwind/react";
import CourselData from "../data/courselData";

function HomeCoursel() {



    console.log(CourselData)

    return (<>
        <div className="bg-[#ffff] rounded-md bg-no-repeat bg-cover min-h-[20vh] text-center" style={{ backgroundPosition: "center center", backgroundImage: "url('https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2130_20231208181518.jpeg')" }}>
            <div className="py-12 shadow-xl ">

            <div class="flex md:mx-5  mx-0 bg-white" >
                <div class="w-1/3 p-4  text-2xl">
                    <h2 className="pt-10">Yeni yıl gelmeden</h2>
                    <p className="font-bold pt-4">fırsatlar geldi</p>
                    <Button className="mt-[25%]">Alışverişe Başla</Button>
                </div>
                <div class="w-2/3 p-4 ">
                    <img src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2130_20231208181518.jpeg" className="rounded-xl m-auto" />
                </div>
            </div>
            </div>
        </div>




    </>);
}

export default HomeCoursel;