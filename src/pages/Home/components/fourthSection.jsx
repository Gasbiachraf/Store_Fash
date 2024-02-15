import { image } from '@nextui-org/react';
import imageRight from '../../../assets/img/banner-08.jpg'
import imageLeft from '../../../assets/img/shop-item-09.jpg'

export const FourthSection = () => {
    return (
        <>
            <div className="flex justify-center bg-[#f0f0f0] py-16">
                <div className=" flex w-[80%] gap-8 max-[430px]:flex-col max-[430px]:w-[90%]">
                    <div className=' relative overflow-hidden '>
                        <img className='duration-200 hover:scale-125 w-[100]' src={imageRight} alt="..." />
                        <div className='absolute text-white text-center  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
                            <p className='text-xl pb-5'>The Beauty</p>
                            <p className='text-6xl pb-8'>LOOKBOOK </p>
                            <p className='text-white  py-3 px-8 rounded-full'>view collection</p>
                        </div>
                    </div>
                    <div className=' relative overflow-hidden '>
                        <img className='duration-200 hover:scale-125 w-[100]' src={imageLeft} alt="..." />
                        <div className='absolute text-black  text-center  transform -translate-x-1/2   left-1/2 bottom-2 '>
                            <p className='text-xl text-[#767676]'>boxy2 t-shirt with roll sleeve</p>
                            <p className='text-2xl pb-8 text-[#767676]'>$20.00</p>
                            <div className='flex gap-2 pb-4'>
                                <div className='border px-2 py-1 text-xl'>
                                    <p className='m-0'>-1871</p>
                                    <p className='m-0'>days</p>
                                </div>
                                <div className='border px-2 py-1 text-xl'>
                                    <p className='m-0'>-1871</p>
                                    <p className='m-0'>days</p>
                                </div>
                                <div className='border px-2 py-1 text-xl'>
                                    <p className='m-0'>-1871</p>
                                    <p className='m-0'>days</p>
                                </div>
                                <div className='border px-2 py-1 text-xl'>
                                    <p className='m-0'>-1871</p>
                                    <p className='m-0'>days</p>
                                </div>                           
                            </div>
                        </div>
                    </div>
                    <div></div>

                </div>

            </div>
        </>
    );
};

