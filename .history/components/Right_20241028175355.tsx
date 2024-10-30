import Link from "next/link"
export default function Right() {
    return (
        <div className="w-[20%] h-full bg-transparent">
            <Link href="/signup">Signup here</Link>
            <Link href="/login">Login here</Link>
        </div>
    )
} 