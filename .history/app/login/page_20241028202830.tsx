import { FaGithub } from "react-icons/fa6";
import Link

export default function LoginPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Login here</h1>
            <div className="border border-orange-500 w-[350px] h-fit rounded-md p-2">
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id='email' placeholder="email" className="border-none p-2 rounded-md w-full h-[40px] text-black" />  
                <label htmlFor="password" className="text-white">password</label>
                <input type="password" id='password' placeholder="password" className="border-none p-2 rounded-md w-full h-[40px] text-black" />
                <button className="w-full h-40px bg-orange-500 rounded-md p-2 mt-4" >Login</button>
                <span className="w-full flex justify-center p-2">or</span>
                <button className="w-full h-40px bg-transparent border border-white rounded-md p-2 flex flex-row gap-2 justify-center" ><FaGithub size={25}/>LogIn with Github</button>
            </div>
            <Link
        </div>
    )
}