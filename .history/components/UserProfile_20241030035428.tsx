// components/UserProfile.tsx
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex flex-col items-center">
      {session?.user ? ( // Check if session and user are defined
        <>
          <h2>Welcome, {session.user.name || "Anonymous"}</h2>
          <img
            src={session.user.image || "/path/to/default/image.png"} // Fallback to default image
            alt="User Profile Image"
            className="rounded-full w-16 h-16"
          />
          <p
        </>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
