
import { useContext, useEffect, useState } from 'react';
import bgImage from '../../../assets/img/heading-pages-02.jpg'
import { MyContext } from '../../../utils/ContextProvider';
import { CiSearch } from "react-icons/ci";


export const FirstSectionShop = () => {


    let [product, useProduct] = useContext(MyContext)
    const [category, setCategory] = useState('Old')
    const [specificCategory, setSpecificCategory] = useState([])
    useEffect(() => {
        const ChoiceCategory = () => {
            let array = product.filter(element => element.category == category);

            setSpecificCategory(array)
        }
        ChoiceCategory()
    }, [category]);
    console.log(category);
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <p className='text-5xl py-20 text-center text-white'> PRODUCTS </p>
            </div>
            <div className="flex justify-center py-10">
                <div className="flex justify-between w-[80%]">
                    <div className='w-[20%]'>
                        <div className='flex flex-col  pb-6'>
                            <b className='text-xl pb-4'>Categories</b>
                            <button className='text-start pb-2' onClick={() => setCategory('Old')} >Old</button>
                            <button className='text-start pb-2' onClick={() => setCategory('Sale')} >Sale</button>
                            <button className='text-start pb-2' onClick={() => setCategory('New')} >New</button>
                        </div>
                        <div className='flex flex-col  pb-6'>
                            <b className='text-xl pb-4'>Price</b>
                            <form className='flex flex-col' action="">
                                <div>
                                    <input type='radio' name='achraf' />
                                    <label className='pl-2' htmlFor="">0-20</label>
                                </div>
                                <div>
                                    <input type='radio' name='achraf' />
                                    <label className='pl-2' htmlFor="">20-40</label>
                                </div>
                            </form>
                        </div>
                        <div className=" flex justify-between items-center border my-1">
                            <form action="">
                                <input placeholder='Search...' className='border-0' type="text" />
                            </form>
                            <CiSearch className='text-2xl' />

                        </div>

                    </div>
                    <div className="w-[75%]  ">
                        <div className=' flex justify-between'>
                            <div className="items-center  my-1  w-[40%]">
                                <div className=' gap-4 flex justify-between w-[100%] '>
                                    <select className='bg-transparent w-[100%]' name="" id="">
                                        <option value="">Lorem1</option>
                                        <option value="">Lorem2</option>
                                        <option value="">Lorem3</option>
                                        <option value="">Lorem4</option>
                                        <option value="">Lorem5</option>
                                    </select>
                                    <select className='bg-transparent w-[100%]' name="" id="">
                                        <option value="">Lorem1</option>
                                        <option value="">Lorem2</option>
                                        <option value="">Lorem3</option>
                                        <option value="">Lorem4</option>
                                        <option value="">Lorem5</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p>Showing 1 to 6 of 8 items</p>
                            </div>
                        </div>

                        <div className=" h-screen overflow-y-auto profilScroll flex justify-center w-[100%] mt-8">
                            <div className="w-[100%] flex flex-wrap gap-4 pb-20">
                                {
                                    specificCategory.map((element, index) =>
                                        < >
                                            <div className=" flex flex-col w-[32%] pb-6">
                                                <img src={element.img} alt="" />
                                                <p className="text-lg pt-4 text-[#767676]  hover:text-red-600 duration-300">{element.text} </p>
                                                <div className="flex justify-between text-[#767676]">
                                                    <p className="text-xl">${element.price} </p>
                                                    <p className="text-xl ">({element.category}) </p>
                                                </div>
                                            </div>
                                        </>)
                                }

                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    );
};
