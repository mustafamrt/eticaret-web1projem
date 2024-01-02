import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeKampanyaCoursel({ data }) {
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
        <div className=' px-12 mt-12'>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item  px-4 ">
                        <div dangerouslySetInnerHTML={{ __html: item.text }}  className='text-xl mb-5 h-10'/>
                        <img src={item.image} alt={item.text}  className='rounded-xl w-full'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeKampanyaCoursel;
