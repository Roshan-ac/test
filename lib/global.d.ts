import "next-auth";

type CustomToken = {
  accessToken?: string;
};

declare module "next-auth/jwt" {
  export interface JWT extends CustomToken {}
}

type CustomUser = {
  success: boolean;
  message: string;
  token: string;
};

declare module "next-auth" {
  export interface User extends CustomUser {}
}
