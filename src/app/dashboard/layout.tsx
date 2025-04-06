import Sidebar from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/shared/Navbar";
import { ReactNode } from "react";

function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="flex flex-col flex-1 lg:flex-row bg-gray-100">
        <Sidebar />
        <div className="min-h-screen flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full px-5">
          <main className="p-10 bg-white m-10 rounded-md w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
