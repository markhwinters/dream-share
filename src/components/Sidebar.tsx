"use client";
import { cn } from "@/lib/utils";
import { Cloud, Home, Settings, Share, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const adminMenu = [
  { name: "Home", href: "/admin", icon: Home },
  { name: "Dreams", href: "/admin/dreams", icon: Cloud },
  { name: "Users", href: "/admin/users", icon: User },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export const userMenu = [
  { name: "Share", href: "/dream", icon: Share },
  { name: "View Dream", href: "/dream/id", icon: Cloud },
  { name: "Settings", href: "/settings", icon: Settings },
];

function Sidebar({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  return (
    <div className="bg-background text-foreground p-5">
      <ul className="gap-5 flex lg:flex-col ">
        {isAdmin && pathname.startsWith("/admin") ? (
          <>
            {adminMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <span
                    className={cn(
                      "group flex items-center gap-2 p-5 rounded-md",
                      pathname === item.href ? "bg-accent" : "bg-background/55"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-primary" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {userMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <span
                    className={cn(
                      "group flex items-center gap-2 p-5 rounded-md",
                      pathname === item.href ? "bg-accent" : "bg-background/55"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-primary" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
