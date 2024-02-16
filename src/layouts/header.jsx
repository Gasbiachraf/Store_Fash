

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../assets/img/logo.png'
import avatare from '../assets/img/avatar-man.webp'
import { SlBasket } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './header.sass'

import photo from '../assets/img/item-12.jpg'
import { MyContext } from '../utils/ContextProvider';



export const NavbarFashe = () => {
    const navigate = useNavigate()

    const [boolean, setBoolean] = useState(false)




    let [product, useProduct, panier, setPanier] = useContext(MyContext)
    let totalPrice = 0 
    
    panier.forEach(element => {
        let PriceTotal = element.price * element.number ;
        totalPrice = totalPrice+PriceTotal ;
        
        
    });

    return (

        <>
            <Navbar fluid rounded className='bg-white  py-4 border-b-2 fixed z-10 w-[100%] '>
                <Navbar.Brand className='ml-10' href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-7 " alt="Flowbite React Logo" />

                </Navbar.Brand>
                <div className="flex items-center md:order-2 pr-2">
                    <FaRegCircleUser onClick={() => { navigate('./account') }} className='text-2xl' /> <span className='text-2xl text-[#dad7d0] px-3'>|</span>
                    <SlBasket className='text-2xl max-[430px]:mr-2' onClick={() => { setBoolean(!boolean) }} />

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to={"/"} active>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                </Navbar.Collapse>
            </Navbar>
            <div className={` ${boolean ? 'block' : 'hidden'}`}>
                <div className='shadow-xl rounded-lg bg-white mt-[8.9vh] max-[430px]:mt-[11vh] max-[430px]:w-[70%] w-[25%] h-[71vh] fixed z-10 right-2 p-5'>
                    <div className='flex flex-col h-[75%] gap-4 overflow-y-auto scroll'>
                        {
                            panier.map((element, index) =>
                                <>
                                    <div className=' flex h-[35%] gap-4'>
                                        <img src={element.img} alt="" />
                                        <div>
                                            <p>{element.text}</p>
                                            <p>{element.number} x ${element.price}.00</p>
                                        </div>
                                    </div>
                                </>)
                        }
                    </div>
                    <p className='text-end pt-4'>Subtotal : $ {totalPrice}</p>
                    <div className='pt-8 flex justify-between'>
                        <button onClick={()=>{navigate('/cart')}} className='bg-[#111111] text-white py-2 max-[430px]:text-sm max-[430px]:px-6 px-10 rounded-full hover:bg-red-600 duration-300'>VIEW CART</button>
                        <button className='bg-[#111111] text-white py-2 max-[430px]:text-sm max-[430px]:px-6 px-10 rounded-full hover:bg-red-600 duration-300'>CHECKOUT</button>
                    </div>



                </div>
            </div>

        </>
    );
};




