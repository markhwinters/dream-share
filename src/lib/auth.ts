import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export async function syncUserWithDatabase() {
  const user = await currentUser();

  if (!user) return null;

  // Check if user exists in our database
  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  // If not, create a new user
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        username: user.username || `user${user.id.substring(0, 6)}`,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        profileImage: user.imageUrl,
      },
    });
  }

  return dbUser;
}

export async function isAdmin() {
  const { userId } = await auth();
  if (!userId) return false;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { isAdmin: true },
  });

  return !!user?.isAdmin;
}
