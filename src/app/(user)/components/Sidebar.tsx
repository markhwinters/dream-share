import {
  Bot,
  BotMessageSquare,
  DeleteIcon,
  LayoutDashboardIcon,
  PencilLineIcon,
  SearchIcon,
  Share,
  Share2Icon,
} from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-white p-5 text-white">
      <ul className="flex gap-5 lg:flex-col">
        <li className="flex-1">
          <Link
            className="flex flex-col items-center gap-2 rounded-md bg-[#2991EE] p-5 text-center hover:opacity-50 lg:flex-row lg:text-left"
            href="/"
          >
            <LayoutDashboardIcon className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Dreams</p>
              <p className="text-sm font-extralight">Your dreams dashboard</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            className="flex flex-col items-center gap-2 rounded-md bg-[#2991EE] p-5 text-center hover:opacity-50 lg:flex-row lg:text-left"
            href="/share"
          >
            <Share className="h-6 w-6 lg:h-6 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Share</p>
              <p className="text-sm font-extralight">Share your dream</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            className="flex flex-col items-center gap-2 rounded-md bg-[#2991EE] p-5 text-center hover:opacity-50 lg:flex-row lg:text-left"
            href="/delete-account"
          >
            <DeleteIcon className="h-6 w-6 lg:h-8 lg:w-8" />
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
