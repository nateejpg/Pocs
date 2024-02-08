"use client";
import { useState } from "react";

interface SearchProps {
  handleNewTask: (text: string) => void;
}

export default function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const HandleClick = () => {
    props.handleNewTask(searchValue);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-6/12 -mt-5 space-x-2  flex">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Add new task!"
          className="text-sm w-10/12 bg-zinc-500 text-gray-200 rounded placeholder-gray-300 h-9"
        />
        <button className="bg-sky-700 rounded h-9 grow" onClick={HandleClick}>
          New
        </button>
      </div>
    </div>
  );
}
