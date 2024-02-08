"use client";

export default function TasksHeader() {
  return (
    <div className="flex justify-center">
      <div className="w-6/12 flex justify-between">
        <div>
          <h4 className="text-blue-400">
            Tasks Created
            <span className="bg-zinc-700 rounded-full px-3 text-sm text-white ml-2">
              5
            </span>
          </h4>
        </div>
        <div>
          <h4 className="text-violet-400">
            Tasks Concluded
            <span className="bg-zinc-700 rounded-full px-3 text-sm text-white ml-2">
              2 of 3
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
