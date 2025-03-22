import Link from "next/link";
import Avatar from "@/components/Avatar";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="flex justify-between bg-white p-5 text-gray-800 shadow-sm">
      <Link className="flex items-center text-4xl font-thin" href="/">
        <Avatar seed="Dream Share" />
        <div className="space-y-1 pl-3">
          <h1>Dream Share</h1>
          <h2 className="text-sm">Share your dreams</h2>
        </div>
      </Link>
      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
