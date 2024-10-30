'use client'
import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";
import 

export default function ProfilePage() {
    return (
        <SessionProvider>
            <UserProfile />
        </SessionProvider>
    );
}