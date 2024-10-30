// components/UserProfile.tsx
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  const userImage = session?.user?.image || "/path/to/default/image.png"; // Default image path

  return (
    <div className="flex flex-col items-center">
      {session ? (
        <>
          <h2>Welcome, {session.user.name}</h2>
          <img
            src={userImage} // Now this will always be a string
            alt="User Profile Image"
            className="rounded-full w-16 h-16"
          />
        </>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
