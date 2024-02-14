'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const FooterFashe = () => {
    return (
        <Footer className='bg-[#f0f0f0] rounded-none px-6'>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
                    <div>
                        <Footer.Title className='text-black text-xl' title="Git in toush" />
                        <Footer.LinkGroup col>
                            <p className='pr-16'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="mt-4 flex space-x-6 sm:mt-0 ">
                                <Footer.Icon href="#" icon={BsFacebook} />
                                <Footer.Icon href="#" icon={BsInstagram} />
                                <Footer.Icon href="#" icon={BsTwitter} />
                                <Footer.Icon href="#" icon={BsGithub} />
                                <Footer.Icon href="#" icon={BsDribbble} />
                            </div>
                        </Footer.LinkGroup>
                    </div>
                    <div className='flex gap-20 '>
                        <div>
                            <Footer.Title className='text-black text-xl' title="CATEGORIES" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Men</Footer.Link>
                                <Footer.Link href="#">Women</Footer.Link>
                                <Footer.Link href="#">Dresses</Footer.Link>
                                <Footer.Link href="#">Sunglasses</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-black text-xl' title="LINKS" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Search</Footer.Link>
                                <Footer.Link href="#">About Us</Footer.Link>
                                <Footer.Link href="#">Contact Us</Footer.Link>
                                <Footer.Link href="#">Returns</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-black text-xl' title="HELP" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Track Order</Footer.Link>
                                <Footer.Link href="#">Returns</Footer.Link>
                                <Footer.Link href="#">Shipping</Footer.Link>
                                <Footer.Link href="#">FAQs</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className='flex flex-col pl-20 '>
                        <Footer.Title className='text-black text-xl'  title="NEWSLETTER" />
                        <Footer.LinkGroup col>
                            <input placeholder='Email address' className='bg-transparent w-[80%] border-b-2 outline-none border-0  active:border-0' type="text" />
                            <button className=' bg-[#222222]  text-white w-[40%] rounded-full py-3 px-1'>SUBSCRIBE</button>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className='text-center pt-10 pb-8'>
                    <p className='text-[#b9b7b5]'>Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.</p>
                </div>

            </div>
        </Footer>
    );
};

