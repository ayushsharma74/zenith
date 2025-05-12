'use client'
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
    const {theme} = useTheme();
    return (
        <footer className="flex p-3 justify-start items-start">
            <span className={`text-sm  ${theme === "dark" ? "text-zinc-200" : "text-zinc-900"}`}>brought to you by <Link href={"https://x.com/ayshtwt"} className="underline hover:no-underline">ayush</Link> </span>
        </footer>
    )
}