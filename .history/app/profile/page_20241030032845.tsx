'use client'
import UserProfile from "@/components/UserProfile";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function Profile ({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
            <UserProfile />
        </div>
    )
} 