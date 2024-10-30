import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { SessionStrategy } from 'next-auth';

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt' as SessionStrategy, // Explicitly set this as `jwt` or `database` 
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
