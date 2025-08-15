import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
});
