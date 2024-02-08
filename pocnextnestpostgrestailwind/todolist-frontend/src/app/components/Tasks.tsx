"use client";

export default function Tasks() {
  return (
    <div className="flex justify-center">
      <div className=" w-6/12">
        <div className="bg-zinc-800 h-20 rounded-lg border-solid border-zinc-700 border flex items-center">
          <div className="w-1/12 flex justify-center">
            <input
              type="checkbox"
              value={""}
              className="rounded-full bg-zinc-800 border-blue-400 w-5 h-5"
            />
          </div>
          <div className="w-10/12">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </div>
          <div className="w-1/12 flex justify-center">
            <button className="hover:text-red-700">
              {" "}
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
