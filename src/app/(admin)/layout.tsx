import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function Adminlayout() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <div>Adminlayout</div>;
}

export default Adminlayout;
