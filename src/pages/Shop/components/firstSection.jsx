
import { useContext, useEffect, useState } from 'react';
import bgImage from '../../../assets/img/heading-pages-02.jpg'
import { MyContext } from '../../../utils/ContextProvider';
import { CiSearch } from "react-icons/ci";
import './firstSection.sass'


export const FirstSectionShop = () => {


    let [product, useProduct] = useContext(MyContext)
    const [category, setCategory] = useState('Old')
    const [categoryPrice, setCategoryPrice] = useState([0,20])
    const [categoryPriceLenght, setCategoryPriceLenght] = useState([])
    const [specificCategory, setSpecificCategory] = useState([])
    let arrayOld = product.filter(element => element.category == 'Old');
    let arraySale = product.filter(element => element.category == 'Sale');
    let arrayNew = product.filter(element => element.category == 'New');
    useEffect(() => {
        const ChoiceCategory = () => {
            let array = product.filter(element => element.category == category);
            let arrayPrice = array.filter(element => ((element.price > categoryPrice[0]) && (element.price <= categoryPrice[1])))
            console.log( categoryPrice[0]);
            console.log( categoryPrice[1]);
            setCategoryPriceLenght(arrayPrice)

            setSpecificCategory(arrayPrice)
        }
        ChoiceCategory()
    }, [categoryPrice , category]);

    const TextChange = (parames) => {
        if (parames == 'Old') {
            return (`Showing  ${categoryPriceLenght.length} of ${arrayOld.length} items`)
        } else if (parames == 'New') {
            return (`Showing  ${categoryPriceLenght.length} of ${arrayNew.length} items`)
        } else if (parames == 'Sale') {
            return (`Showing  ${categoryPriceLenght.length} of ${arraySale.length} items`)
        }

    }

    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <p className='text-5xl py-20 text-center text-white'> PRODUCTS </p>
            </div>
            <div className="flex justify-center py-10">
                <div className="flex justify-between w-[80%] max-[430px]:w-[90vw] max-[430px]:flex-col">
                    <div className='w-[20%] max-[430px]:w-[100%]'>
                        <div className='flex flex-col  pb-6'>
                            <b className='text-xl pb-4'>Categories</b>
                            <button className='text-start pb-2' onClick={() => setCategory('Old')} >Old ({arrayOld.length} items)</button>
                            <button className='text-start pb-2' onClick={() => setCategory('Sale')} >Sale ({arraySale.length} items)</button>
                            <button className='text-start pb-2' onClick={() => setCategory('New')} >New ({arrayNew.length} items)</button>
                        </div>
                        <div className='flex flex-col  pb-6'>
                            <b className='text-xl pb-4'>Price</b>
                            <form className='flex flex-col' action="">
                                <div>
                                    <input onClick={()=>{setCategoryPrice([0 , 20])}} type='radio' name='achraf' />
                                    <label className='pl-2' htmlFor="">0-20</label>
                                </div>
                                <div>
                                    <input onClick={()=>{setCategoryPrice([20 , 40])}} type='radio' name='achraf' />
                                    <label className='pl-2' htmlFor="">20-40</label>
                                </div>
                            </form>
                        </div>
                        <div className=" flex justify-between items-center border mt-4 ">
                            <form action="">
                                <input placeholder='Search...' className='border-0' type="text" />
                            </form>
                            <CiSearch className='text-2xl' />
                        </div>
                    </div>
                    <div className="w-[75%]  max-[430px]:w-[90vw] max-[430px]:pt-8">
                        <div className=' flex justify-between  max-[430px]:flex-col '>
                            <div className="  my-1  w-[40%] max-[430px]:w-[100%]  max-[430px]:pb-1 ">
                                <div className=' gap-4 flex justify-between w-[100%] max-[430px]:w-[55%]  max-[430px]:flex-col'>
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
                                <p>
                                    {
                                        TextChange(category)
                                    }
                                </p>
                            </div>
                        </div>

                        <div className=" h-screen overflow-y-auto  flex max-[430px]:flex-col justify-center w-[100%] mt-8 max-[430px]:mt-4">
                            <div className="w-[100%] flex flex-wrap  gap-4 pb-20 max-[430px]:h-[100%]">
                                {
                                    specificCategory.map((element, index) =>
                                        < >
                                            <div key={index} className=" flex flex-col w-[32%] max-[430px]:w-[100%]    pb-6">
                                                <img className=' ' src={element.img} alt="" />
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
