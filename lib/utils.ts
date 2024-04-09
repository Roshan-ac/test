import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const createQueryString = (params) => {
  return Object.entries(params)
    .filter(([key, value]) => value !== undefined && value !== "")
    .map(
      ([key, value]: [string, string]) => `${key}=${encodeURIComponent(value)}`,
    )
    .join("&");
};

