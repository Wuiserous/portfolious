'use client'
import { SessionProvider, useSession } from "next-auth/react";
import UserProfile from "../../components/UserProfile";
import GitHubRepos from "@/components/GitHubRepos";

export default function ProfilePage() {
    return (
        <SessionProvider>
            <UserProfile />
        </SessionProvider>
    );
}