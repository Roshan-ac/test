"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import Spinner from "@/icons/spinner";
import { cn } from "@/lib/utils";

interface FormInterface {
  username: string;
  password: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInterface>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";

  const submitHandler = async (data: FormInterface) => {
    setIsLoading(true);
    const { username, password } = data;

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
      // callbackUrl: searchParams?.get('callbackUrl') || '/',
    });

    if (!res?.ok) {
      if (res?.error?.includes("user")) {
        setError("username", { type: "custom", message: res?.error });
      } else if (res?.error?.includes("password")) {
        setError("password", { type: "custom", message: res?.error });
      } else if (res?.error?.includes("AccessDenied")) {
        setError("root", {
          type: "custom",
          message: "You are not authorized to access this site.",
        });
      } else {
        setError("root", {
          type: "custom",
          message: "Something went wrong. Please try again.",
        });
      }
    } else {
      // work around
      router.push(callbackUrl);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex min-h-screen">
      <div className="m-auto space-y-3 rounded-sm border-[.5px] border-gray-400 px-7 py-9">
        <h1 className="text-center text-3xl font-semibold text-primaryText">
          {" "}
          Login{" "}
        </h1>
        <p className="text-primaryText opacity-75">
          Enter your email below to login to your account
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-3">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="name"
                placeholder="m@example.com"
                required
                type="text"
                className="bg-slate-300  text-secondaryBackground"
                {...register("username")}
              />
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <Input
                id="pw"
                placeholder="********"
                required
                type="password"
                className="bg-slate-300 text-secondaryBackground"
                {...register("password")}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          {errors?.root && (
            <p className="px-1 text-xs text-red-600">{errors.root.message}</p>
          )}
          <button
            type="submit"
            className={cn(
              "w-full rounded border bg-gray-100 py-1 text-center font-medium text-secondaryBackground hover:bg-[#292932] hover:text-gray-100 ",
              `${isLoading && "bg-[#292932]"}`,
            )}
          >
            {isLoading ? <Spinner className="inline-block" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
