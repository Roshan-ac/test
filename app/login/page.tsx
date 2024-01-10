"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

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

  const submitHandler = (data: FormInterface) => {
    console.log(data);
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
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                className="text-secondaryBackground"
                {...register("username")}
              />
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <Input
                id="pw"
                placeholder="********"
                required
                type="password"
                className="text-secondaryBackground"
                {...register("password")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-gray-100 py-1 font-medium text-secondaryBackground hover:bg-[#292932] hover:text-gray-100 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
