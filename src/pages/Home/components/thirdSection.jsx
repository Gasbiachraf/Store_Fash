import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import photo from "../../../assets/img/banner-02.jpg";



export const ThirdSectionHome = () => {

    let [product, useProduct] = useContext(MyContext)
    const [category, setCategory] = useState('Old')
    const [specificCategory, setSpecificCategory] = useState([])
    useEffect(() => {
        const ChoiceCategory = () => {
            let array = product.filter(element => element.category == category);
            let array4 = array.slice(0 , 4)      
            setSpecificCategory(array4)
        }
        ChoiceCategory()
    }, [category]);
    console.log(category);

    return (
        <>
            <h1 className="text-3xl text-center pt-10 pb-10">FEATURED PRODUCTS</h1>
            <div className=" flex justify-center gap-8 text-xl pb-8">
                <button onClick={() => setCategory('Old')} >Old</button>
                <button onClick={() => setCategory('Sale')} >Sale</button>
                <button onClick={() => setCategory('New')} >New</button>
            </div>
            <div>
                <div className="flex justify-center w-[100%]">
                    <div className="w-[80%] flex flex-wrap gap-6 pb-20">
                        {
                            specificCategory.map((element, index) =>
                                < >
                                    <div className=" flex flex-col w-[23%] ">
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

        </>
    );
};

