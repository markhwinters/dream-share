import { Delete, Edit, PencilLine, SearchIcon, Share } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col ">
        <li className="flex-1">
          <Link
            href="/dream"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <Share className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Share</p>
              <p className="text-sm font-extralight">Share your dream</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/view-dreams"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <PencilLine className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Edit</p>
              <p className="text-sm font-extralight">Edit your dream</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/delete-account"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <Delete className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Delete</p>
              <p className="text-sm font-extralight">Delete your account</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
