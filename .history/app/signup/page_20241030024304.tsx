import { FaGithub } from "react-icons/fa6";

import Link from "next/link";
import { signIn,useSession } from "next-auth/react";

export default function SignupPage() {
    const session = useSession();

    return (
        <div className=" flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Sign-up here</h1>
            <div className="border p-4 border-orange-500 w-[350px] flex flex-col h-fit rounded-md">
                {session.data?.user && <button className="w-full h-40px bg-transparent border border-white rounded-md p-2 flex flex-row gap-2 justify-center" onClick={() => signIn()}><FaGithub size={25}/>Logout</button>}
                {!session.data?.user &&

                <button className="w-full h-40px bg-transparent border border-white rounded-md p-2 flex flex-row gap-2 justify-center" onClick={() => signIn()}><FaGithub size={25}/>SignIn with Github</button>}
            </div>
            <span>already have an account?</span><Link href='/login' className="text-orange-500"> Login here!</Link>
        </div>
    )
}