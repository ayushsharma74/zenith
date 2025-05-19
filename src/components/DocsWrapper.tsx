"use client";
import { satisfy } from "@/fonts/font";
import { Components, GettingStarted } from "@/lib/ComponentLinks";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function DocsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const path = usePathname();

  const darkgradient =
    "bg-gradient-to-br from-[#2c2831] via-[#542c39] to-[#2c2831]";
  const lightgradient =
    " bg-gradient-to-br from-[#ada2bb] via-[#f699b6] to-[#ada2bb]";

  return (
    <div
      className={`${theme == "dark" ? darkgradient : lightgradient} h-screen`}
    >
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 h-[52px] py-2 px-4 flex justify-between items-center border-b bg-inherit backdrop-blur-md">
        <Link
          href="/"
          className={`scroll-m-20 text-2xl font-bold tracking-tight ${satisfy.className}`}
        >
          Zenith
        </Link>
        <div className="flex flex-row gap-3">
          <FaGithub size={23} />
          {theme === "dark" ? (
            <IoMdMoon size={23} onClick={() => setTheme("light")} />
          ) : (
            <IoSunny size={23} onClick={() => setTheme("dark")} />
          )}
        </div>
      </nav>

      {/* Content Wrapper with padding for navbar */}
      <div className="flex pt-[52px] h-full">
        {/* Fixed Sidebar */}
        <aside className="fixed top-[52px] left-0 w-64 h-[calc(100vh-52px)] border-r p-4 overflow-y-auto z-10 bg-inherit">
          <h1 className="font-semibold text-lg">Getting Started</h1>
          {GettingStarted.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block ${
                path === link.href
                  ? "bg-[#ebbfda] dark:bg-[#513144] font-bold"
                  : ""
              } rounded-sm mt-2 text-sm px-2 py-2 hover:px-4 transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-4">

          <h1 className="font-semibold text-lg">Components</h1>
          {Components.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block ${
                path === link.href
                  ? "bg-[#ebbfda] dark:bg-[#513144] font-bold"
                  : ""
              } rounded-sm mt-2 text-sm px-2 py-2 hover:px-4 transition-all`}
              >
              {link.name}
            </Link>
          ))}
          </div>
        </aside>

        {/* Scrollable Main Content */}
        <main className="ml-64 p-4 overflow-y-auto h-[calc(100vh-52px)] w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
