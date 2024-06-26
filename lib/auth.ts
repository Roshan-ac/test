"server-only";

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

const { BACKEND_API } = process.env;

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
  
          const res = await fetch(`${BACKEND_API}/loginAdmin`, {
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


          const user = await res.json();

          if (res.ok && user) {
            const extendedUser = {
              ...user,
              token: user.token,
            };

  

            return extendedUser;
          } else {
            return null;
          }
          throw new Error(user.message);
        } catch (error) {
  
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
      const res = await fetch(`${BACKEND_API}/getadmininfo`, {
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
