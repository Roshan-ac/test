"server-only";

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

const { BACKEND_URL } = process.env;

interface UserType {
  id: number;
  fullName: string;
  username: string;
  email: string;
  img: string;
  role: "Admin" | "Sales" | "Operation";
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "john.doe",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const { username, password } = credentials;
        try {
          console.log(BACKEND_URL);
          console.log(
            JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          );
          const res = await fetch(`${BACKEND_URL}/loginAdmin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NDg2MzgxNjQiLCJuYW1lIjoiQ3VzdDEiLCJwaG9uZSI6IjkzOTMzNSIsImVtYWlsIjoiY3VzdDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTVlZdFlMQ2laS3dsYkFsejNnVXEzLkRHLlhjSzRyTWNPSTludk4ySUVReENlMnloMFJiRDIiLCJhZGRyZXNzIjoiQ2Fyb2wgYmFnaCwgRGVsaGkifQ.NjzEYWpEcA2e83wGugFadmTfS1UmWF_6FK_Be0a-lrE",
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          console.log(res);
          const user = await res.json();
          console.log(user);
          console.log(credentials);

          if (res.ok && user) {
            const extendedUser = {
              ...user,
              token: user.token,
            };

            console.log(extendedUser);

            return extendedUser;
          } else {
            return null;
          }
          throw new Error(user.message);
        } catch (error) {
          console.log("Error", error);
          throw new Error((error as Error).message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      const res = await fetch(`${BACKEND_URL}/getadmininfo`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      const user = await res.json();
      return {
        ...session,
        user: {
          ...user.data,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        return { ...token, accessToken: user?.token };
      }
      return token;
    },
  },
  events: {
    signOut: async () => {
      const cookieStore = cookies();

      cookieStore.getAll().forEach((cookie) => {
        cookieStore.delete(cookie.name);
      });

      redirect("/");
    },
  },
  debug: process.env.NODE_ENV === "development",
};
