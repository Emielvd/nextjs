"use client"
import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  const showLogin = usePathname() === "/login" ? false : true;
  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center">
          <li>
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
          </li>
          <li>
            <ul className="flex justify-between items-center gap-6">
              {showLogin && (
                <li>
                  <Button asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                </li>
              )}
              <li>
                <ModeToggle />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
