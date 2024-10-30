// use client
import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { Session } from 'next-auth';

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      // Ensure token.user has the correct type
      const user = token.user as { name?: string | null; email?: string | null; image?: string | null } | undefined;

      // Check if user and session.user are defined
      if (user) {
        session.user = {
          name: user.name ?? null, // Use null coalescing to default to null if undefined
          email: user.email ?? null,
          image: user.image ?? null,
        } as Session['user']; // Type assertion to ensure it's correctly typed
      }

      return session;
    },
  },
};

export default options;
