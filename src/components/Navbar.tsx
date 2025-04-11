"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Cloud, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ isAdmin }: { isAdmin: boolean }) {
  return (
    <header className="bg-background text-foreground flex justify-between p-5">
      <Link href="/" className="flex items-center gap-2">
        <Cloud className="h-6 w-6" />
        <span className="font-bold text-xl hidden md:block">Dream Share</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {isAdmin && (
          <>
            <Link href="/admin">
              <LayoutDashboard />
            </Link>
          </>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}
