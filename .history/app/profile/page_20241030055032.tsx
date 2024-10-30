// app/profile/page.tsx

'use client';
import { SessionProvider, useSession } from "next-auth/react";
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
    const { data: session } = useSession();

    return (
        <>
            <UserProfile />
            {session?.accessToken ? (
                <GitHubRepos accessToken={session.accessToken} />
            ) : (
                <p>Please log in to view your GitHub repositories.</p>
            )}
        </>
    );
}
