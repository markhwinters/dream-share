"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Cloud, Home, Upload, LayoutDashboard } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();
  //const isAdmin = user?.publicMetadata?.role === "ADMIN";

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      icon: Home,
    },
    {
      href: "/dream",
      label: "My Dreams",
      active: pathname === "/dream" || pathname.startsWith("/dream/"),
      icon: Upload,
      auth: true,
    },
    {
      href: "/dashboard",
      label: "Admin",
      active: pathname.startsWith("/dashboard"),
      icon: LayoutDashboard,
      admin: true,
    },
  ];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Cloud className="h-6 w-6" />
          <span className="font-bold text-xl hidden md:block">Dream Share</span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />

          <LayoutDashboard />
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}
