"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
export async function getUserRole() {
  const { userId } = await auth();
  if (!userId) return "GUEST";

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });

  return user?.role || "GUEST";
}
export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    //check if user exists
    const exisitingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (exisitingUser) {
      return exisitingUser;
    }

    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return dbUser;
  } catch (error) {
    console.log("Error in syncUser", error);
  }
}
