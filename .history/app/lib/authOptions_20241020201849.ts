import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: { email },
        });

       

        if (!user) {
          console.log("User not found");
          return null;
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          console.log("Invalid password");
          return null;
        }
        
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl ?? undefined
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    })

  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }: { token: JWT; user?: User }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
       
      }
     
      return token;
    },
    session: ({ session, token }: { session: Session; token: JWT }) => {
      if (session && session.user) {
        
        session.user.name = token.name;
  
      }
      
      return session;
    },
  },
};