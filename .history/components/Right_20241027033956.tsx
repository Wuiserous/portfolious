import { useSession, signIn, signOut } from "next-auth/react";

export default function Right() {
    const { data: session } = useSession();

    return (
        <div className="w-[20%] h-full bg-transparent">
            
        </div>
    )
}