'use client'
import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";
import GitHubRepos from "@/components/GitHubRepos";

export default function ProfilePage() {
    return (
        <SessionProvider>
            <ProfileContent />
        </SessionProvider>
    );
}

function ProfileContent() {
    const { data: session } = useSession(); // Retrieve session data using useSession

    return (
        <>
            <UserProfile />
            {session?.accessToken ? ( // Check if the accessToken exists
                <GitHubRepos accessToken={session.accessToken} />
            ) : (
                <p>Please log in to view your GitHub repositories.</p>
            )}
        </>
    );
}
