import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
 
const Login = () => {

    const { showLogin, setShowLogin } = useContext(AppContext);


    return (
        <div className='absolute  bg-black text-white p-5 top-60 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-xl'>
            <div className='flex flex-col gap-8'>
                <p onClick={()=>setShowLogin(false)}><i className="fa-regular fa-circle-xmark self-end text-2xl cursor-pointer text-gray-500"></i></p>
                <h1 className='text-2xl text-red-500 font-extrabold text-center'>Signin</h1>
                <form className='flex flex-col gap-5'>
                    <input type="text" className='w-full py-2 px-2 border border-gray-600 rounded-md' placeholder='Enter your email/mobile number' />
                    <input type="password" className='w-full  py-2 px-2 border border-gray-600 rounded-md' placeholder='Enter your password' />
                    <button className='text-white bg-red-500 rounded-md py-1.5 px-2 cursor-pointer font-semibold'>Signin</button>
                    <p className='text-sm font-semibold flex items-end scale-105 gap-1 pl-4'><span><input type="checkbox" /></span> Remember me</p>
                </form>
            </div>
        </div>
    )
}

export default Login
