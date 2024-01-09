"use client";

import Header from "./components/Header";
import Search from "./components/Search";
import TasksHeader from "./components/TasksHeader";
import Tasks from "./components/Tasks";
import EmptyState from "./components/EmptyState";

export default function Home() {
  const HandleNewTask = async (text: string) => {
    console.log("HandleNewTask", text);

    const response = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log("test", result);
  };

  return (
    <main className=" min-h-screen bg-zinc-900">
      <h1>
        <div>
          <Header></Header>
          <Search handleNewTask={HandleNewTask}></Search>
          <div className="mt-20 mb-5">
            <TasksHeader></TasksHeader>
          </div>
          <Tasks></Tasks>
          {/* <EmptyState></EmptyState> */}
        </div>
      </h1>
    </main>
  );
}
