import { getUserRole, syncUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function DreamPage() {
  return <div>DreamsPage</div>;
}

export default DreamPage;
