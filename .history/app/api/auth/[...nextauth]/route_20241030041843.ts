// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

const handler: NextAuthOptions = {
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
            // Add `username` to session.user, cast session.user as Record<string, any> for TypeScript support
            (session.user as Record<string, any>).username = token.username;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                // Add `username` from user to token
                (token as JWT & { username?: string }).username = (user as any).username;
            }
            return token;
        }
    }
};

export default NextAuth(handler);
