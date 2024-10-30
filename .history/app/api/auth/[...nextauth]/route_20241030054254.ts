// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    username: profile.login,
                };
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            (session.user as Record<string, any>).username = token.username;
            (session as Record<string, any>).accessToken = token.accessToken; // Add accessToken to session
            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                (token as JWT & { username?: string; accessToken?: string }).username = (user as any).username;
                token.accessToken = account?.access_token; // Save accessToken from the GitHub account
            }
            return token;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
