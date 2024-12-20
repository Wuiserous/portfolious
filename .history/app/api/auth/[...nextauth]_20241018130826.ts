import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'; // You can add other providers here (Google, Facebook, etc.)

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET? ''
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub? '';
      return session;
    }
  }
});
