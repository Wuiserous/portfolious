import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div className="w-[100%] h-fit border-b-[1px] border-gray-700 flex flex-col p-2 justify-center items-center">
                <div>
                    <Link href="/signup">Signup</Link>
                </div>
                <div className="w">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    )
} 