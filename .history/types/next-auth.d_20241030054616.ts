// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      accessToken?: string; | null;  // Add username here
    };
  }
  interface Token {
    accessToken?: string; // Add the accessToken property
    username?: string; // Ensure username is also part of the token
  }
}
