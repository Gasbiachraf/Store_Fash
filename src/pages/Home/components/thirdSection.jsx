import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../utils/ContextProvider";
import photo from "../../../assets/img/banner-02.jpg";
import GifModal from "../../../assets/img/donegif3.gif";

import { useNavigate } from "react-router-dom";





import { Button, Modal } from 'flowbite-react';
import { color } from "framer-motion";

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

    const [nameProduct , setNameProduct] = useState("")
    const arrayPanier = [...panier]


    const AddToCard = (parames) => {
        let productAdd = product.filter(element => element.id == parames)
        let questionPanier = panier.filter(element => element.id == parames)
        if (questionPanier.length == 0) {
            arrayPanier.push(productAdd[0])
            setPanier(arrayPanier)
            console.log(panier);
        } else {
            // alert('product already exist')
            let productplus = panier.filter(element => element.id == parames)
            productplus[0].number++
        }
        setOpenModal(true)
        setNameProduct(productAdd[0].text)

    }

    const [openModal, setOpenModal] = useState(false);

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
                                            <button onClick={() => { AddToCard(element.id) }} className='bg-[#111111] text-white py-2 w-[60%] max-[430px]:text-sm max-[430px]:w-[100%] max-[430px]:px-12  rounded-full hover:bg-red-600 duration-300'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </>)
                        }
                        {
                            <Modal show={openModal}  size="md" onClose={() => setOpenModal(false)} popup>
                                <Modal.Header className="bg-[#eceff1]"/>
                                <Modal.Body className="bg-[#eceff1]">
                                    <div style={{backgroundImage : `url(${GifModal})` , backgroundSize : 'cover'}} className="text-center border-2 border-green-400 rounded-xl h-[40vh] bg-[#eceff1]">
                                        
                                        
                                        <h3 className="mb-4 text-current   text-xl font-normal text-gray-500 dark:text-gray-400 pt-10">
                                            {nameProduct}
                                        </h3>
                                        <h6 className="mb-4 pt-28 pl-8">is added to cart !</h6>
                                        <div className="flex justify-end gap-4">
                                            <Button  className="mr-4  bg-green-400  " onClick={() => setOpenModal(false)}>
                                                Ok
                                            </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

