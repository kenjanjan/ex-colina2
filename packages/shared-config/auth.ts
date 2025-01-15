import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
});
