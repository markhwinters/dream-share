import {
  Delete,
  Edit,
  LayoutDashboard,
  PencilLine,
  SearchIcon,
  Settings,
  Share,
  User,
} from "lucide-react";
import Link from "next/link";

function AdminSidebar() {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col ">
        <li className="flex-1">
          <Link
            href="/admin"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <LayoutDashboard className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Dashboard</p>
              <p className="text-sm font-extralight">Admin dashboard</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/admin/dreams"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <Share className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Dreams</p>
              <p className="text-sm font-extralight">View uploaded dreams</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/admin/users"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <User className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Users</p>
              <p className="text-sm font-extralight">Manage users</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/admin/settings"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#2991EE]"
          >
            <Settings className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Settings</p>
              <p className="text-sm font-extralight">Edit settings</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
