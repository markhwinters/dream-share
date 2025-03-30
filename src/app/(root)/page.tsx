import { getUserRole } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";
async function HomePage() {
  const role = await getUserRole();

  if (role === "MEMBER") {
    redirect("/dream");
  }
  return <div>HomePage</div>;
}

export default HomePage;
