
export default function Right() {
    return (
        <div className="w-[20%] h-full bg-transparent">
             {!session ? (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      ) : (
        <div>
          
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
        </div>
    )
} 