// pages/index.tsx (or your homepage file)
import { useSession } from "next-auth/react";
import UserProfile from '../components/UserProfile'; // Adjust the path if needed

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center">
      <h1>Welcome to My App</h1>
      {session ? (
        <UserProfile /> // Render the UserProfile component if logged in
      ) : (
        <p>Please log in to access your profile.</p> // Prompt to log in
      )}
    </div>
  );
};

export default HomePage;
