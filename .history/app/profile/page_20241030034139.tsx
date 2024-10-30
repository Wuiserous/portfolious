'use client'
import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";

export default function ProfilePage({ Component, pageProps }) {
    return (
        <SessionProvider>
            <UserProfile />
        </SessionProvider>
    );
}