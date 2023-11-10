import { type ClassValue, clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7,
); // 7-character random string

export const colorClasses: { [key: string]: string } = {
  red: "bg-red-200 text-red-500 ring-red-400",
  blue: "bg-blue-200 text-blue-500 ring-blue-400",
  green: "bg-green-200 text-green-500 ring-green-400",
  purple: "bg-purple-200 text-purple-500 ring-purple-400",
  yellow: "bg-yellow-200 text-yellow-600 ring-yellow-400",
  pink: "bg-pink-200 text-pink-500 ring-pink-400",
  sky: "bg-sky-200 text-sky-500 ring-sky-400",
  lime: "bg-lime-200 text-lime-500 ring-lime-400",
  stone: "bg-stone-200 text-stone-500 ring-stone-400",
  orange: "bg-orange-200 text-orange-500 ring-orange-400",
  cyan: "bg-cyan-200 text-cyan-500 ring-cyan-400",
  amber: "bg-amber-200 text-amber-500 ring-amber-400",
  emerald: "bg-emerald-200 text-emerald-500 ring-emerald-400",
  gray: "bg-gray-200 text-gray-500 ring-gray-400",
};
