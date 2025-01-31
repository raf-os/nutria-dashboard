/// MAIN APP PAGE ///

import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/common/button";
import Link from "next/link";
import dbConnect from "@/lib/db";

export default function Home() {
  return (
    <div className="flex min-h-dvh justify-center items-center py-4 px-4 lg:px-0">
      <div className="flex flex-col flex-nowrap w-full lg:w-[640px] lg:max-h-dvh p-6 lg:py-10 justify-items-center bg-slate-300 rounded-xl text-gray-900">

        <h1 className="text-center font-bold text-2xl mb-3">
          NutrIA Dashboard - Login
        </h1>

        <form className="flex flex-col gap-4 items-center">
          <LoginInputField name="email" placeholder="Email" type="email" />
          <LoginInputField name="password" placeholder="Password" type="password" />

          <p>Don't have an account? <Link className="link-blue" href="">Register here</Link></p>

          <Button className="w-11/12">Log In</Button>
        </form>
      </div>
    </div>
  )
}

function LoginInputField({ className, ...rest}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      { ...rest }
      className = {clsx(
        'w-full lg:w-11/12 rounded-lg px-2 py-1 text-slate-500 border border-gray-400 outline-2 outline-offset-1 outline-rose-500 focus:outline focus:text-gray-900',
        className,
      )}
    />
  )
}
