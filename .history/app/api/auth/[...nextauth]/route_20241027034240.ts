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
      if (session.user && token.user) {
        const user = token.user as { name?: string | null; email?: string | null; image?: string | null };
        session.user = {
          name: user.name || null,
          email: user.email || null,
          image: user.image || null,
        };
      }
      return session;
    },
  },
};

export default options;
