import { SessionProvider } from "next-auth/react";
import UserProfile from "../../components/UserProfile";

export default function ProfilePage() {
    return (
        <SessionProvider>
            <UserProfile />
        </SessionProvider>
    );
}