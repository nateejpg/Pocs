"use client";

export default function EmptyState() {
  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <h3 className="text-center font-bold text-zinc-500">
          No tasks registered yet
        </h3>
        <h5 className="text-center text-zinc-500">
          Create tasks and organize your items todo
        </h5>
      </div>
    </div>
  );
}
