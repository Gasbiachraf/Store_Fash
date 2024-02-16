import bgImage from '../../../assets/img/master-slide-02.jpg'
import firstpicture from '../../../assets/img/item-15.jpg'
export const FirstSectionCart = () => {
    return (
        <>
        <div className='h-[8.5vh]'></div>
        <div className='max-[430px]:py-20' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <p className='text-5xl py-20 max-[430px]:p-0  text-center text-white'> YOUR SHOPPING CART </p>
        </div>
        <div className='flex justify-center '>
            <table className='w-[80%]   my-10 '>
                <thead className='pb-4'>
                    <tr  className='h-[8vh]'>
                        <th className='w-[20%] text-start '></th>
                        <th className='w-[20%] text-start '>PRODUCT NAME</th>
                        <th className='w-[20%] text-center '>UNIT PRICE</th>
                        <th className='w-[20%] text-start '>QUANTITY</th>
                        <th className='w-[20%] text-center '>TOTAL</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className='border'>
                        <td className=' py-8'><img className='w-[40%] m-auto' src={firstpicture} alt="" /></td>
                        <td className=' py-8'><div className='flex flex-col'><p>Boxy7 T-Shirt with Roll Sleeve</p><p>size</p></div></td>
                        <td className=' py-8 text-xl text-center'>$20.00</td>
                        <td className=' py-8 text-xl'><form action=""><input  type="number" min={1} /></form></td>
                        <td className=' py-8 text-xl text-center'>$60.00</td>
                    </tr>
                    <tr className='border'>
                        <td className=' py-8'><img className='w-[40%] m-auto' src={firstpicture} alt="" /></td>
                        <td className=' py-8'><div className='flex flex-col'><p>Boxy7 T-Shirt with Roll Sleeve</p><p>size</p></div></td>
                        <td className=' py-8 text-xl text-center'>$20.00</td>
                        <td className=' py-8 text-xl'><form action=""><input  type="number" min={1} /></form></td>
                        <td className=' py-8 text-xl text-center'>$60.00</td>
                    </tr>
                    <tr className='border'>
                        <td className=' py-8'><img className='w-[40%] m-auto' src={firstpicture} alt="" /></td>
                        <td className=' py-8'><div className='flex flex-col'><p>Boxy7 T-Shirt with Roll Sleeve</p><p>size</p></div></td>
                        <td className=' py-8 text-xl text-center'>$20.00</td>
                        <td className=' py-8 text-xl'><form action=""><input  type="number" min={1} /></form></td>
                        <td className=' py-8 text-xl text-center'>$60.00</td>
                    </tr>
                    <tr className='border'>
                        <td className=' py-8'><img className='w-[40%] m-auto' src={firstpicture} alt="" /></td>
                        <td className=' py-8'><div className='flex flex-col'><p>Boxy7 T-Shirt with Roll Sleeve</p><p>size</p></div></td>
                        <td className=' py-8 text-xl text-center'>$20.00</td>
                        <td className=' py-8 text-xl'><form action=""><input  type="number" min={1} /></form></td>
                        <td className=' py-8 text-xl text-center'>$60.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
            
        </>
    );
};

