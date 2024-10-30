export default function SignupPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Sign-up here</h1>
            <div className="border p-4 border-orange-500 w-[350px] h-[400px] rounded-md">
                <label htmlFor="username" className="text-orange-500">Username</label>
                <input type="text" id='username' value='username' className="border-none rounded-md w-full h-[40px] text-white " />  
                <label htmlFor="email" className="text-orange-500">Email</label>
                <input type="text" id='email' value='email' className="border-none rounded-md w-full h-[40px] text-white " />  
                <label htmlFor="password" className="text-white">password</label>
                <input type="password" id='password' value='password' className="border-none rounded-md w-full h-[40px] text-white " />  
            </div>
        </div>
    )
}