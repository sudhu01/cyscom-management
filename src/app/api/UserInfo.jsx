"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="absolute top-44 left-12 flex place-items-center text-xl">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className="text-white">
          Welcome, <span className="font-bold">{session?.user?.name}</span> 👋
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
