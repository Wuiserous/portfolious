import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div>
                <Link href="/signup">Signup here</Link>
            <Link href="/login">Login here</Link>
            </div>
        </div>
    )
} 