import { FaGithub } from "react-icons/fa6";

import Link from "next/link";

export default function SignupPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Sign-up here</h1>
            <div className="border p-4 border-orange-500 w-[350px] flex flex-col h-fit rounded-md">
                <label htmlFor="username" className="text-white">Username</label>
                <input type="text" id='username' placeholder="username" className="border-none p-2 rounded-md w-full h-[40px] text-black" />  
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id='email' placeholder="email" className="border-none p-2 rounded-md w-full h-[40px] text-black" />  
                <label htmlFor="password" className="text-white">password</label>
                <input type="password" id='password' placeholder="password" className="border-none p-2 rounded-md w-full h-[40px] text-black" />
                <button className="w-full h-40px bg-orange-500 rounded-md p-2 mt-4" >Signup</button>
                <span className="w-full flex justify-center p-2">or</span>
                <button className="w-full h-40px bg-transparent border border-white rounded-md p-2 flex flex-row gap-2 justify-center" ><FaGithub size={25}/>SignIn with Github</button>
            </div>
            <Link href='/login'>already have Login here!</Link>
        </div>
    )
}