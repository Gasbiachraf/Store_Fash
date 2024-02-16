
import { GoChevronRight } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const FirstSectionRegister = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className='h-[8.5vh]'></div>
            <div className="flex items-center  max-[430px]:pl-3 pl-10 py-8">
                <div onClick={()=>{navigate('/')}} className="flex items-center hover:text-red-600">
                    <p >home</p>
                    <GoChevronRight className="pt-1 text-xl" />
                </div>
                <p onClick={()=>{navigate('/account/register')}} className="hover:text-red-600" >Create Account</p>
            </div>
            <div className="flex justify-center">
                <div className="w-[80%] max-[430px]:w-[95%] flex flex-col">
                    <p className="text-5xl">Create Account</p>
                    <p className="text-xl pt-2">Your Personal Details</p>
                    <form className="pr-60 max-[430px]:pr-4  pl-4 pt-4" action="">
                        <div className="flex flex-col pb-4">
                            <label className="pb-2" htmlFor="">First Name</label>
                            <input placeholder="First Name" type="text" />
                        </div>
                        <div className="flex flex-col pb-4">
                            <label className="pb-2" htmlFor="">Last Name</label>
                            <input placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex flex-col pb-4">
                            <label className="pb-2" htmlFor="">Email</label>
                            <input placeholder="Email" type="email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="pb-2" htmlFor="">Password</label>
                            <input placeholder="password" type="password" />
                        </div>
                        <div className="flex items-center py-8">
                            <button className="bg-[#292929] px-12 text-white  py-3  mr-6 flex items-center"><FaUser className="text-sm mr-1" /> CREATE</button>
                            <p>or Return to Store</p>
                        </div>
                    </form>
                </div>

            </div>

        </>
    );
};
