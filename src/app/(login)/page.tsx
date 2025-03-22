import Avatar from "@/components/Avatar";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#64B5F5] py-10 md:py-0">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-5 text-white">
          <div className="rounded-full bg-white p-5">
            <Avatar className="h-60 w-60" seed={"Dream Share"} />
          </div>
          <div className="text-center">
            <h1 className="text-4xl">Dream Share</h1>
            <h2 className="text-base font-light">Share your dreams</h2>
            <h3 className="text-base font-light">Sign in to get started</h3>
          </div>
        </div>
        <SignIn routing="hash" fallbackRedirectUrl="/" />
      </div>
    </div>
  );
}

export default LoginPage;
