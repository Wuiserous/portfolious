'use client'
import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";
import GitHubRepos from "@/components/GitHubRepos";

export default function ProfilePage() {
    return (
        <SessionProvider>
            <UserProfile />
            <UserProfile />
        </SessionProvider>
    );
}