import { isAdmin } from "@/actions/user.action";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function AdminLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const checkAdmin = await isAdmin();

  if (!checkAdmin) {
    redirect("/");
  }

  return (
    <>
      <Navbar isAdmin={checkAdmin} />
      <div className="flex min-h-screen">
        <aside className="hidden md:block w-64">
          <Sidebar isAdmin={checkAdmin} />
        </aside>
        <main className="bg-bacground text-foreground p-5 rounded-md">
          {children}
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
