
import { useSession, signIn, signOut } from "next-auth/react";

export default function Right() {
    const { data: session } = useSession(); // Get session data

    return (
        <div className="w-[20%] flex flex-col h-full bg-transparent">
            <div className="w-[100%] h-fit border-b-[1px] border-gray-700 flex flex-col gap-2 p-2 justify-center items-center">
                {!session ? ( // Check if there is no session
                    <button
                        onClick={() => signIn()} // Sign in if no session
                        className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center"
                    >
                        Signup
                    </button>
                ) : (
                    <button
                        onClick={() => signOut()} // Sign out if session exists
                        className="w-full rounded-xl h-fit border border-gray-700 flex flex-col p-2 justify-center items-center"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}
