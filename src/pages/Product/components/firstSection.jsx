
import { useContext } from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../utils/ContextProvider";
import photo from '../../../assets/img/item-12.jpg'
export const FirstSectionProduct = () => {
    const navigate = useNavigate()
    let [product, useProduct] = useContext(MyContext)

    return (
        <>
            <div className="flex items-center  max-[430px]:pl-3 pl-10 py-8">
                <div onClick={() => { navigate('/') }} className="flex items-center hover:text-red-600">
                    <p >home</p>
                    <GoChevronRight className="pt-1 text-xl" />
                </div>
                <p onClick={() => { navigate('/product') }} className="hover:text-red-600" >Best seller</p>
            </div>
            <div className="flex justify-center">
                <div className="w-[80vw] flex gap-12">
                    <div className="w-[100%] flex gap-6">
                        <div className="w-[20%] flex flex-col gap-3">
                            <img src={photo} alt="" />
                            <img src={photo} alt="" />
                            <img src={photo} alt="" />
                            <img src={photo} alt="" />
                            <img src={photo} alt="" />
                            <img src={photo} alt="" />
                        </div>
                        <div className="w-[80%]">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <p className="text-2xl pb-4">Boxy4 T-Shirt with Roll Sleeve</p>
                        <p className="text-3xl pb-4">$20.00</p>
                        <p className="pb-10">Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....</p>
                        <div className="flex gap-2 pb-8">
                            <p className="border  px-3 text-2xl">S</p>
                            <p className="border  px-3 text-2xl">M</p>
                            <p className="border  px-3 text-2xl">L</p>
                            <p className="border  px-3 text-2xl">XL</p>
                        </div>
                        <div className=" flex gap-4">
                            <input type="number" min={1}  />
                            <button className=" bg-black text-white px-5 rounded-full py-1">ADD TO CARD</button>
                        </div>
                        <div className="flex gap-10 pt-20">
                            <p>Brand: MyVendor</p>
                            <p>Categories: boxy , Shirts , sleeveless</p>
                        </div>
                        

                    </div>

                </div>

            </div>

        </>
    );
};

