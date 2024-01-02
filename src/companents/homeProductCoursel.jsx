import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeProductCarousel({ data }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Adjust as needed
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };

    return (
        <div className=' px-12'>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item  px-4 ">
                        <div className="border border-[#00000059] justify-center flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                            <div className="p-6 text-center">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {item.name}
                                </h5>
                            </div>
                            <div
                                className="relative max-h-56 mx-4 -mt-6 overflow-hidden text-white">
                                <img
                                    src={item.image}
                                    alt="card-image"
                                    className='shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40' />
                            </div>

                            <div className="p-6 text-center font-bold">
                                <span className='text-2xl'>{item.price}</span> <span className='text-sm'>TL</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeProductCarousel;
