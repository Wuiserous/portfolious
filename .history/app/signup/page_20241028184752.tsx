export default function SignupPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Sign-up here</h1>
            <div className="border p-4 border-orange-500 w-[350px] h-[400px] rounded-md">
                <label htmlFor="username" className="text-white">Username</label>
                <input type="text" id='username' placeholder="username" className="border-none p-2 rounded-md w-full h-[40px] text-black" />  
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id='email' placeholder="email" className="border-none p-2 rounded-md w-full h-[40px] text-black" />  
                <label htmlFor="password" className="text-white">password</label>
                <input type="password" id='password' placeholder="password" className="border-none p-2 rounded-md w-full h-[40px] text-black" />
                <button className="w-full h-40px;"  
            </div>
        </div>
    )
}