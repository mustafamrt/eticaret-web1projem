import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function HomeProductCoursel({ data }) {

    return (

        <div className='mt-12 px-12'>


            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >


                {
                    
                    data.map((item, index) => {
                        return (
                            <div key={index} class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56">
                                <div class="p-6 text-center">
                                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.name}
                                    </h5>
                                </div>
                                <div
                                    class="relative max-h-56 mx-4 -mt-6 overflow-hidden text-white  ">
                                    <img
                                        src={item.image}
                                        alt="card-image"
                                        className='shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40' />
                                </div>

                                <div class="p-6 text-center font-bold">
                                    <span className='text-2xl'>{item.price}</span> <span className='text-sm'>TL</span>
                                </div>
                            </div>
                        )
                    })
                }






            </Carousel>

        </div>
    )

}

export default HomeProductCoursel;