"use client";
import { FaGithub } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { satisfy } from "@/fonts/font";
import { motion } from "motion/react";


export default function Navbar() {
  const { setTheme, theme } = useTheme();
  return (
    <motion.nav initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="flex justify-between p-3  items-center">
      <h1 className={`scroll-m-20 text-2xl font-bold tracking-tight ${satisfy.className} `}>Zenith</h1>
      <div className="flex flex-row gap-3">
        <FaGithub size={23} />
        {theme === "dark" && (
          <IoMdMoon size={23} onClick={() => setTheme("light")} />
        )}
        {theme === "light" && (
          <IoSunny size={23} onClick={() => setTheme("dark")} />
        )}
      </div>
    </motion.nav>
  );
}
