"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/app/components/ui/button";
import { ModeToggle } from "@/app/components/mode-toggle";
import { cn } from "@/app/lib/utils";
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
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Cloud className="h-6 w-6" />
          <span className="font-bold text-xl hidden md:block">Dream Share</span>
        </Link>
        <nav className="flex items-center gap-6 mx-6">
          {routes.map((route) => {
            //if (route.admin && !isAdmin) return null;
            //if (route.auth && !isSignedIn) return null;
            
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                  route.active ? "text-black dark:text-white" : "text-muted-foreground"
                )}
              >
                <route.icon className="h-4 w-4" />
                <span className="hidden md:block">{route.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <ModeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <Button size="sm">
                Sign In
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}
