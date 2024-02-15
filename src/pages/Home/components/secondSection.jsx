import React from 'react';
import bannerc11 from '../../../assets/img/banner-02.jpg'
import bannerc12 from '../../../assets/img/banner-05.jpg'
import bannerc21 from '../../../assets/img/banner-03.jpg'
import bannerc22 from '../../../assets/img/banner-07.jpg'
import bannerc31 from '../../../assets/img/banner-04.jpg'
import bannerc32 from '../../../assets/img/banner-09.jpg'

export const SecondSectionHome = () => {
    return (
        <>
            <section className='flex justify-center pb-8'>
                <div className='w-[78%] flex max-[430px]:flex-col gap-8 py-10'>
                    <div className='w-[100%] gap-8 flex flex-col '>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105' src={bannerc11} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>DRESSES</button>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105 ' src={bannerc12} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>SUNGLASSES</button>
                        </div>
                    </div>
                    <div className='w-[100%] gap-8 flex flex-col '>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105 ' src={bannerc21} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>WATCHES</button>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105 ' src={bannerc22} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>FOOTERWEAR</button>
                        </div>
                    </div>
                    <div className='w-[100%] gap-8 flex flex-col'>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105 ' src={bannerc31} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>BAGS</button>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='duration-500 hover:scale-105 ' src={bannerc32} alt="" />
                            <button className='absolute left-1/2 bottom-4 py-3 px-8 bg-[#fffefeee] transform -translate-x-1/2 duration-500 hover:bg-red-500 hover:text-white'>ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

