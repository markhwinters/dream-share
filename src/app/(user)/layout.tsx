import { getUserRole, syncUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function UserLayout({ children }: { children: ReactNode }) {
  const user = await currentUser();
  if (user) await syncUser();

  const role = await getUserRole();

  if (role !== "USER") {
    redirect("/");
  }
  return (
    <div className="flex flex-1">
      <main className="flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}

export default UserLayout;
