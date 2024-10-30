import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div className="w-[100%] h-[30%] border-b-[1px] border-gray-700 flex flex-col justify-center items-center">
                <Link href="/signup">Signup here</Link>
                <Link href="/login">Login here</Link>
            </div>
        </div>
    )
} 