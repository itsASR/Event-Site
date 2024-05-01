import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='bg-gradient-to-r from-pink-500 to-purple-600 py-8'>
            <div className='container mx-auto'>
                <div className='max-w-4xl mx-auto'>
                    <Slider {...settings}>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 1' className='w-full h-auto' />
                        </div>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 2' className='w-full h-auto' />
                        </div>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 3' className='w-full h-auto' />
                        </div>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 4' className='w-full h-auto' />
                        </div>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 5' className='w-full h-auto' />
                        </div>
                        <div className='w-full'>
                            <img src='https://picsum.photos/1800/300' alt='Slider Image 6' className='w-full h-auto' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Sliders;
