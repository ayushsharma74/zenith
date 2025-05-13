'use client'
import { satisfy } from "@/fonts/font";
import { GettingStarted } from "@/lib/ComponentLinks";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function DocsWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  const darkgradient =
    "bg-gradient-to-br from-[#2c2831] via-[#542c39] to-[#2c2831]";
  const lightgradient =
    " bg-gradient-to-br from-[#ada2bb] via-[#f699b6] to-[#ada2bb]";

  return (
    <div className={`${theme == "dark" ? darkgradient : lightgradient} `}>
      <nav className="py-2 px-4 flex justify-between items-center border-b">
        <Link href={'/'} className={`scroll-m-20 text-2xl font-bold tracking-tight ${satisfy.className} `}>Zenith</Link>
        <div className="flex flex-row gap-3">
                <FaGithub size={23} />
                {theme === "dark" && (
                  <IoMdMoon size={23} onClick={() => setTheme("light")} />
                )}
                {theme === "light" && (
                  <IoSunny size={23} onClick={() => setTheme("dark")} />
                )}
              </div>       
      </nav>
      <div className="flex min-h-screen" >
      <aside className="w-64 border-r p-4">
        <h1 className= {`font-semibold text-lg`}>Getting Started</h1>
        {
          GettingStarted.map((link) => (
            <Link key={link.name} href={link.href} className="block mt-2 text-sm px-2 py-1 hover:px-4 transition-all">
              {link.name}
            </Link>
          ))
        }
      </aside>
      <main className="flex-1 p-4">
        {/* <h1>context</h1> */}
      {children}
      </main>
    </div>
    </div>
  );
}
