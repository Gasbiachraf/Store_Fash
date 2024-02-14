import { useState } from "react";
import img1 from '../../../assets/img/blog-08.jpg'
import img2 from '../../../assets/img/blog-09.jpg'
import img3 from '../../../assets/img/blog-10.jpg'

export const FifthSection = () => {

    const [content, setConetent] = useState([
        {
            img: img1,
            titre: 'Black Friday Guide: Best Sales & Discount Codes',
            by: 'by fashe-theme Admin on Dec 28,2017',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...'
        },
        {
            img: img2,
            titre: 'The White Sneakers Nearly Every Fashion Girls Own',
            by: 'by fashe-theme Admin on Dec 28,2017',
            text: 'Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...'
        },
        {
            img: img3,
            titre: 'New York SS 2018 Street Style: By Annina Mislin',
            by: 'by fashe-theme Admin on Dec 28,2017',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...'
        },
    ])
    return (
        <>
            <div className="flex justify-center pt-12">
                <div className="flex flex-col items-center   w-[80%] pb-16">
                    <b className="text-4xl py-10">OUR BLOG</b>
                    <div className="flex gap-4 pb-4">
                        {
                            content.map((element, index) =>
                                <>
                                    <div className="w-[100%]   flex flex-col  ">
                                        <div className="overflow-hidden">
                                            <img className="hover:scale-125 duration-500" src={element.img} alt="" />
                                        </div>
                                        <p className="pt-4">{element.titre}</p>
                                        <p className="pt-3 text-sm text-[#9d9797]">{element.by}</p>
                                        <p className="pt-4 text-[#9d9797]">{element.text}</p>
                                    </div>
                                </>)
                        }
                    </div>
                    <b className="text-4xl py-24">@ FOLLOW US ON INSTAGRAM</b>
                    <div className="flex w-[100%] justify-between pt-4 items-center ">
                        <div className="text-center">
                            <p className="text-xl text-[#666666]">Free Delivery Worldwide</p>
                            <p className="text-sm text-[#9d9797]">Mirum est notare quam littera gothica</p>
                        </div>
                        <div className="border-x-2 px-36 py-4 text-center ">
                            <p className="text-xl text-[#666666]">30 Days Return</p>
                            <p className="text-sm text-[#9d9797]">Simply return it within 30 days for an exchange.</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-[#666666]">Store Opening</p>
                            <p className="text-sm text-[#9d9797]">Shop open from Monday to Sunday</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

