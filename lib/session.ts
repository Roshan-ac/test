import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export type UserType = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  img: string;
  role: "Admin" | "Sales" | "Operation" | string;
};

export async function getSession() {
  const session = await getServerSession(authOptions);

  return session;
}

export async function getCurrentUser() {
  const session = await getSession();

  return session?.user as UserType;
}
