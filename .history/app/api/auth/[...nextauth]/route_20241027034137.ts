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
        if (session.user && token.user && typeof token.user === 'object') {
          session.user = {
            name: token.user.name as string | null,
            email: token.user.email as string | null,
            image: token.user.image as string | null,
          };
        }
        return session;
      },
  },
};

export default options;
