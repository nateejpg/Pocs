import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-zinc-950 flex flex-col text-center h-40 items-center justify-center">
      <Image src="/Logo.svg" alt="Logo" width={126} height={48}></Image>
    </header>
  );
}
