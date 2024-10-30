import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID ?? '',
          clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
          profile(profile) {
            return {
              id: profile.id,
              name: profile.name,
              email: profile.email,
              image: profile.avatar_url, // This is where we get the user's image
            };
        })
      ]
})

export { handler as GET, handler as POST }