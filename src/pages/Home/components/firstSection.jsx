'use client';


import './firstSection.sass'
import { Carousel } from 'flowbite-react';
import carousel1 from '../../../assets/img/master-slide-01.jpg'
import carousel2 from '../../../assets/img/master-slide-02.jpg'
import carousel3 from '../../../assets/img/master-slide-04.jpg'
import { useState } from 'react';



export const FirstSectionHome = () => {

    const [pictures, setPictures] = useState([
        {
            img: carousel1
        },
        {
            img: carousel2
        },
        {
            img: carousel3
        }
    ])
    return (
        <>


        
            {/* // ^^ Carousel : */}
            <section>
                <div className="h-30 sm:h-64 xl:h-80 2xl:h-[60vh] ">
                    <Carousel className='rounded-none' slide={false}>
                        {
                            pictures.map((element, index) =>
                                <>
                                    <div key={index} className=' relative  '>
                                        <img  src={element.img} alt="..." />
                                        <div className='absolute text-white text-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
                                            <p className='text-xl pb-5'>Women collection 2018</p>
                                            <p className='text-6xl pb-8'>NEW ARRIVALS </p>
                                            <button className='text-black bg-white py-3 px-8 rounded-full'>SHOP NOW</button>
                                        </div>
                                    </div>
                                </>)
                        }
                    </Carousel>
                </div>
            </section>
        </>

    );
}
