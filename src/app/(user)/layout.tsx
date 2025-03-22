import { ReactNode } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

async function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="flex flex-1 flex-col bg-gray-100 lg:flex-row">
        <Sidebar />
        <div className="mx-auto flex w-full max-w-5xl flex-1">{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
