

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../assets/img/logo.png'
import avatare from '../assets/img/avatar-man.webp'
import { SlBasket } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const NavbarFashe = () => {
    return (
        <Navbar fluid rounded className='bg-[#f0f0f0] py-4'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />

            </Navbar.Brand>
            <div className="flex items-center md:order-2 pr-2">
                <FaRegCircleUser className='text-2xl'/> <span className='text-2xl text-[#dad7d0] px-3'>|</span>
                <SlBasket className='text-2xl' />

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={"/fash"} active>Home</Link>
                <Link to={"/fash/shop"}>Shop</Link>
                <Link to={"/fash/about"}>About</Link>
                <Link to={"/fash/contact"}>Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};




