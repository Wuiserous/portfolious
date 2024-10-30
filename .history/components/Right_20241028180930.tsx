import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div className="w-[100%] h-fit border-b-[1px] border-gray-700 flex flex-col gap-2 p-2 justify-center items-center">
                <button onClick={() => window.location.href = "/signup"} className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center">
                    Signup
                </button>
                <button onClick={() => window.location.href = "/login"} className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center">
                    Signup
                </button>
                <div className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    )
} 