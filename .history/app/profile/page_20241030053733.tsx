'use client'
import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";
import Gi

export default function ProfilePage() {
    return (
        <SessionProvider>
            <UserProfile />
        </SessionProvider>
    );
}