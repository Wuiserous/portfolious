import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { Session } from "next-auth";

// Define your NextAuth options
const options: AuthOptions = {
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

      // Check if user is defined
      if (user) {
        session.user = {
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
        } as Session['user'];
      }

      return session;
    },
  },
};

// Named exports for HTTP methods
export const GET = (req: Request, res: Response) => NextAuth(req, res, options);
export const POST = (req: Request, res: Response) => NextAuth(req, res, options);
