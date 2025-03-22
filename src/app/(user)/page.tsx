import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-10 w-full rounded-md bg-white p-10">
      <h1 className="text-4xl font-light">
        <span className="font-semibold text-[#64B5F5]">Deam Share</span>
      </h1>
      <h2 className="mt-2 mb-10">
        Your customizable AI chat agent that helps manage your customer
        conversations.
      </h2>
      <Link href="/upload-dream">
        <Button className="bg-[#64B5F5]">
          Lets get started by uploading your dream
        </Button>
      </Link>
    </main>
  );
}
