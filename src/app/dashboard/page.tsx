import KanbanBoard from "@/components/pages/dashboard/KanbanBoard";
import LogoutIconButton from "@/components/pages/dashboard/buttons/LogoutIconButton";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { IoLogoGithub, IoCube, IoPeople, IoLogoBuffer } from "react-icons/io5";

const DashBoardPage: React.FC = async () => {
  const session = {
    user: {
      name: "Matheus",
      image: "https://github.com/matheus55391.png",
    },
  };
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div className="bg-rose-600 w-14 flex flex-col items-center justify-between  ">
        <div className="h-10 w-10 my-4 flex items-center justify-center  rounded-full bg-white overflow-hidden border-2 ">
          {session?.user.image ? (
            <Image
              src={session?.user.image}
              alt="Logo"
              width={40}
              height={40}
            />
          ) : (
            <span>{session?.user.name[0] + session?.user.name[1]}</span>
          )}
        </div>
        <div className="flex flex-col items-center space-y-6">
          <IoCube className="text-white" size={24} />
          <IoPeople className="text-white" size={24} />
          <Link
            href="https://github.com/matheus55391/kanban_board"
            target="_blank"
            className="text-white"
          >
            <IoLogoGithub className="text-white" size={24} />
          </Link>
        </div>
        <LogoutIconButton />
      </div>

      <div className="flex flex-col w-full overflow-scroll">
        <div className="flex flex-row items-center pl-4">
          <IoLogoBuffer className="text-black" size={24} />
          <h1 className="text-2xl font-bold text-center p-3">Project Board</h1>
        </div>
        <div className="flex h-full w-full ">
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
