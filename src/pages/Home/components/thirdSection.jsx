import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import photo from "../../../assets/img/banner-02.jpg";
import { useNavigate } from "react-router-dom";



export const ThirdSectionHome = () => {
    const navigate = useNavigate()

    let [product, useProduct, panier, setPanier] = useContext(MyContext)
    const [category, setCategory] = useState('Old')
    const [specificCategory, setSpecificCategory] = useState([])
    useEffect(() => {
        const ChoiceCategory = () => {
            let array = product.filter(element => element.category == category);
            let array4 = array.slice(0, 4)
            setSpecificCategory(array4)
        }
        ChoiceCategory()

  
    }, [category]);
    console.log(category);

    const AddToCard =(parames)=>{
        let productAdd = product.filter(element => element.id == parames)
        let questionPanier = panier.filter(element => element.id == parames)
        if (questionPanier.length == 0) {
            panier.push(productAdd[0])
            console.log(panier);
        }else{
            // alert('product already exist')
            let productplus = panier.filter(element => element.id == parames)
            productplus[0].number++
        }
    }

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
                    <div className="w-[80%] flex  flex-wrap gap-6 pb-20">
                        {
                            specificCategory.map((element, index) =>
                                < >
                                    <div key={index} className=" flex flex-col w-[23%] max-[430px]:w-[96%] max-[430px]:items-center relative">
                                        <img src={element.img} alt="" />
                                        <p onClick={() => { navigate(`/product/${element.id}`) }} className="text-lg pt-4 text-[#767676]  hover:text-red-600 duration-300">{element.text} </p>
                                        <div className="flex justify-between text-[#767676]">
                                            <p className="text-xl">${element.price} </p>
                                            <p className="text-xl ">({element.category}) </p>
                                        </div>
                                        <div className={`flex justify-center mt-4  `}>
                                            <button onClick={()=>{AddToCard(element.id)}} className='bg-[#111111] text-white py-2 w-[60%] max-[430px]:text-sm  rounded-full hover:bg-red-600 duration-300'>ADD TO CART</button>
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

