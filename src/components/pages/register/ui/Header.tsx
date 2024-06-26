import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="text-zinc-800 p-4 md:px-14 flex justify-between items-center">
      <h1 className="text-2xl font-bold">KanbanBoard</h1>
      <div className="flex flex-row space-x-2 items-center">
        <p className="text-xs font-medium text-zinc-800">Already a member?</p>
        <Link href="/login">
          <button className="text-white bg-rose-500 px-4 py-2 rounded-lg shadow-lg shadow-rose-200 text-sm font-semibold">
            Log In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
