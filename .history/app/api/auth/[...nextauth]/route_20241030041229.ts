// pages/api/auth/[...nextauth].js (or .ts)
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name, // Ensure this line is here
                    email: profile.email,
                    image: profile.avatar_url,
                    
                };
            }
        })
    ]
});

export { handler as GET, handler as POST };
