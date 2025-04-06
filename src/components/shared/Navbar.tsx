"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Cloud, LayoutDashboard } from "lucide-react";

export function Navbar() {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-5">
      <Link href="/" className="flex items-center gap-2">
        <Cloud className="h-6 w-6" />
        <span className="font-bold text-xl hidden md:block">Dream Share</span>
      </Link>
      <div className="flex items-center gap-4">
        <LayoutDashboard />
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
