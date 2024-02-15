

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../assets/img/logo.png'
import avatare from '../assets/img/avatar-man.webp'
import { SlBasket } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const NavbarFashe = () => {
    return (
        <Navbar fluid rounded className='bg-white  py-4'>
            <Navbar.Brand className='ml-10' href="https://flowbite-react.com">
                <img src={logo} className="mr-3 h-6 sm:h-7 " alt="Flowbite React Logo" />

            </Navbar.Brand>
            <div className="flex items-center md:order-2 pr-2">
                <FaRegCircleUser className='text-2xl'/> <span className='text-2xl text-[#dad7d0] px-3'>|</span>
                <SlBasket className='text-2xl' />

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={"/"} active>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};




