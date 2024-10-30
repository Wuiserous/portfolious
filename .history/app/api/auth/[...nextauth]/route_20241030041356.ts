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
                    name: profile.name || profile.login,  // Use GitHub `name` or fallback to `username`
                    email: profile.email,
                    image: profile.avatar_url,
                    username: profile.login,  // Explicitly add GitHub `username` here
                };
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            // Add `username` to session object so it's accessible in components
            session.user.username = token.username;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;  // Add `username` to token
            }
            return token;
        }
    }
});

export { handler as GET, handler as POST };
