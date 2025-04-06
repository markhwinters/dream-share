import AdminSidebar from "@/components/admin/AdminSidebar";
import { Navbar } from "@/components/shared/Navbar";
import { isAdmin } from "@/lib/auth";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AdminLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="flex flex-col flex-1 lg:flex-row bg-gray-100">
        <AdminSidebar />
        <div className="min-h-screen flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full">
          <main className="p-10 bg-white m-10 rounded-md w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
