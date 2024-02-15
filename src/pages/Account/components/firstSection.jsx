
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
export const FirstSectionAccount = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col items-center bg-white ">
                <div className="flex justify-start w-[80%] pl-10 py-8">
                    <div onClick={() => { navigate('/') }} className="flex items-center hover:text-red-600">
                        <p >home</p>
                        <GoChevronRight className="pt-1 text-xl" />
                    </div>
                    <p onClick={() => { navigate('/account') }} className="hover:text-red-600" > Account</p>
                </div>
                <div className="flex w-[95vw] max-[430px]:flex-col  gap-6 pt-16 pb-10 ">
                    <div className="flex flex-col w-[100%] bg-white border p-4 h-[fit-content]">
                        <p className="text-3xl">New Customer</p>
                        <b className="text-[#988b88]">Register Account</b>
                        <p className="pt-1 pb-6 text-[#a4a2a0]">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <button onClick={() => { navigate('./register') }} className="bg-[#292929] w-[30%] text-white  py-2 ">CONTINUE</button>
                    </div>
                    <div className="flex flex-col w-[100%] border p-4">
                        <p className="text-3xl">Returning Customer</p>
                        <p className="text-[#988b88]">I am a returning customer</p>
                        <form action="">
                            <div className="flex flex-col pb-4">
                                <label className="pb-2" htmlFor="">Email</label>
                                <input placeholder="Email" type="email" />
                            </div>
                            <div className="flex flex-col">
                                <label className="pb-2" htmlFor="">Password</label>
                                <input placeholder="password" type="password" />
                            </div>
                            <p className="pb-4">Forgot your password?</p>
                            <div className="flex items-center">
                                <button className="bg-[#292929] w-[30%] text-white  py-2 ">SIGN IN</button>
                                <p>or Return to Store</p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

