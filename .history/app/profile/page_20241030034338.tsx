// pages/profile.tsx
import UserProfile from "../components/UserProfile";
import { getSession } from "next-auth/react";

const ProfilePage = () => {
    return <UserProfile />;
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}

export default ProfilePage;
