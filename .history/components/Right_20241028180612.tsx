import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div className="w-[100%] h-fit border-b-[1px] border-gray-700 flex flex-col gap-2 p-2 justify-center items-center">
                <button className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center">
                    <Link href="/signup">Signup</Link>
                </div>
                <div className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
    )
} 