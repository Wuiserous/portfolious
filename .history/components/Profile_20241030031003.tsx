export default function Profile() {
    return (
        <div className="flex flex-col items-center">
        {session ? (
          <>
            <h2>Welcome, {session.user.name}</h2>
            <img
              src={session.user.image} // Access the user's image from session
              alt="User Profile Image"
              className="rounded-full w-16 h-16"
            />
          </>
        ) : (
          <p>Please log in to see your profile.</p>
        )}
      </div>
    )
}