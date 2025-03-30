import { getUserRole, syncUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function Adminlayout({ children }: { children: ReactNode }) {
  const role = await getUserRole();
  if (role !== "ADMIN") {
    redirect("/");
  }
  return <div>{children}</div>;
}

export default Adminlayout;
