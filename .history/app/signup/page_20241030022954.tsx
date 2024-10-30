'use client'
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { data: session } = useSession();
    const router = useRouter();

    // Redirect to the home page if the user is already signed in
    useEffect(() => {
        if (session) {
            router.push("/"); // Redirect to the home page
        }
    }, [session, router]);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Sign in with credentials (you can implement this)
        // await signIn("credentials", { email, password, redirect: false });
    };

    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-transparent h-[100vh] w-[100vw]">
            <h1>Login here</h1>
            <div className="border border-orange-500 w-[350px] h-fit rounded-md p-2">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email" className="text-white">Email</label>
                    <input type="text" id='email' name="email" placeholder="email" className="border-none p-2 rounded-md w-full h-[40px] text-black" />
                    <label htmlFor="password" className="text-white">Password</label>
                    <input type="password" id='password' name="password" placeholder="password" className="border-none p-2 rounded-md w-full h-[40px] text-black" />
                    <button type="submit" className="w-full h-40px bg-orange-500 rounded-md p-2 mt-4">Login</button>
                </form>
                <span className="w-full flex justify-center p-2">or</span>
                <button 
                    className="w-full h-40px bg-transparent border border-white rounded-md p-2 flex flex-row gap-2 justify-center" 
                    onClick={() => signIn("github", { callbackUrl: "/" })}>
                    <FaGithub size={25}/> LogIn with GitHub
                </button>
            </div>
            <Link href='/signup'>Create account here!</Link>
        </div>
    )
}
