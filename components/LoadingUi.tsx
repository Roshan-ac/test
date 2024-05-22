"use client";
import { cardio } from "ldrs";
import { useEffect } from "react";

export default function LoadingUI() {
  useEffect(() => {
    cardio.register();
  }, []);
  return (
    <div className=" flex h-[100vh] w-full items-center justify-center">
      <l-cardio size="50" stroke="4" speed="2" color="white"></l-cardio>
    </div>
  );
}
