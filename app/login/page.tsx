import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/app/login/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden min-h-max h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative h-full flex-col p-10 text-white flex dark:border-r">
          <div className="absolute inset-0 bg-secondary" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <a
              className="flex place-items-center gap-2 p-8"
              rel="noopener noreferrer"
              href="/"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              {/* <p className="text-lg">
                &ldquo;Adipisicing id cupidatat ea nulla ex non enim
                minim.&rdquo;
              </p> */}
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
