import bgImage from '../../../assets/img/master-slide-02.jpg'
import firstpicture from '../../../assets/img/item-15.jpg'
import { useContext } from 'react';
import { MyContext } from '../../../utils/ContextProvider';
export const FirstSectionCart = () => {
    let [product, useProduct, panier, setPanier] = useContext(MyContext)
    return (
        <>
            <div className='h-[8.5vh]'></div>
            <div className='max-[430px]:py-20' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <p className='text-5xl py-20 max-[430px]:p-0  text-center text-white'> YOUR SHOPPING CART </p>
            </div>
            <div className='flex justify-center '>
                <table className='w-[80%]   my-10 '>
                    <thead className='pb-4'>
                        <tr className='h-[8vh]'>
                            <th className='w-[20%] text-start '></th>
                            <th className='w-[20%] text-start '>PRODUCT NAME</th>
                            <th className='w-[20%] text-center '>UNIT PRICE</th>
                            <th className='w-[20%] text-start '>QUANTITY</th>
                            <th className='w-[20%] text-center '>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            panier.map((element, index) =>
                                <>
                                    <tr key={index} className='border'>
                                        <td className=' py-8'><img className='w-[40%] m-auto' src={element.img} alt="" /></td>
                                        <td className=' py-8'><div className='flex flex-col'><p>{element.text}</p><p>size</p></div></td>
                                        <td className=' py-8 text-xl text-center'>${element.price}</td>
                                        <td  className=' py-8 text-xl'><form action=""><input value={element.number} className='pointer-events-none' type="number" min={1} /></form></td>
                                        <td className=' py-8 text-xl text-center'>$ {element.number * element.price}</td>
                                    </tr>
                                </>)
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

