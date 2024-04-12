'use client';


import './firstSection.sass'
import { Carousel } from 'flowbite-react';
import carousel1 from '../../../assets/img/master-slide-01.jpg'
import carousel2 from '../../../assets/img/master-slide-02.jpg'
import carousel3 from '../../../assets/img/master-slide-04.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const FirstSectionHome = () => {
    const navigate = useNavigate()

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
                <div className='h-[9vh] max-[430px]:h-[11vh]'></div>
                <div className="h-[fit-content] ">
                    <Carousel className='rounded-none' slide={false}>
                        {
                            pictures.map((element, index) =>
                                <>
                                    <div key={index} className=' relative  '>
                                        <img className='h-[75vh] w-[100%] max-[430px]:h-[35vh] max-[430px]:cursor-zoom-out ' src={element.img} alt="..." />
                                        <div className='absolute text-white text-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
                                            <div className='flex flex-col items-center'>
                                                <p className='text-xl pb-5  max-[430px]:text-sm max-[430px]:pb-1 max-[430px]:pt-3'>Women collection 2018</p>
                                                <b className='text-6xl pb-10 max-[430px]:text-2xl  max-[430px]:pb-2'>NEW ARRIVALS </b>
                                                <button onClick={() => { navigate('/shop') }} className='text-black bg-white py-3 w-[35%] rounded-full max-[430px]:py-1 max-[430px]:w-[60%] max-[430px]:text-sm max-[430px]:text-black max-[430px]:mb-2'>SHOP NOW</button>
                                            </div>
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
