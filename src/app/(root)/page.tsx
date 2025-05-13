"use client";
import { satisfy } from "@/fonts/font";
import Link from "next/link";
import { AiTwotoneFire } from "react-icons/ai";
import { motion } from "motion/react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="h-[calc(100vh-64px)] gap-10 flex flex-col justify-center items-start pr-52  ">
        <div className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-8xl text-balance">
          <div className="flex flex-row gap-3">
            <motion.p
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.2 }}
            >
              {" "}
              Build{" "}
            </motion.p>{" "}
            <motion.p
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
            >
              beautiful
            </motion.p>{" "}
          </div>
          <div className="flex flex-row gap-5">
            <motion.p
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              UIs
            </motion.p>{" "}
            <motion.p
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className={`text-[#c62c5d] ${satisfy.className}`}
            >
              {" "}
              faster
            </motion.p>
          </div>
        </div>
        <Link href={"/docs"}>
          <button className="transition-all group flex items-center justify-center rounded-md bg-[#eb9ab4] dark:bg-[#522D38] dark:text-[#eb9ab4] border border-[#c62c5d] hover:border-[#c97993] px-3.5 py-2 text-sm font-semibold  text-[#d70044]  gap-2  cursor-pointer">
            Browse Components
            <AiTwotoneFire
              className="group-hover:scale-125 group-hover:rotate-12 transition-all text-[#c97993]"
              size={20}
            />
          </button>
        </Link>
      </div>
      <section className="flex  flex-col justify-start items-center gap-8 h-[80vh]">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`  text-4xl text-center font-bold tracking-tight lg:text-5xl text-balance`}
        >
          Fully customizable <span className="text-[#c62c5d]">&</span> Open
          Source
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`text-balance text-center text-lg`}
        >
          We follow the Shadcn UI way of doing things. You own your UI code,
          Fully customizable as you want.
        </motion.p>
        <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }} className="flex gap-3">

        <Link href={"/docs"}>
          <button className="transition-all group flex items-center justify-center rounded-md bg-[#eb9ab4] dark:bg-[#522D38] dark:text-[#eb9ab4] border border-[#c62c5d] hover:border-[#c97993] px-3.5 py-2 text-sm font-semibold  text-[#d70044]  gap-2  cursor-pointer">
            Browse Components
            <AiTwotoneFire
              className="group-hover:scale-125 group-hover:rotate-12 transition-all text-[#c97993]"
              size={20}
              />
          </button>
        </Link>
        <Link href={"https://x.com/ayshtwt"}>
          <button className="transition-all group flex items-center justify-center rounded-md bg-[#eb9ab4] dark:bg-[#522D38] dark:text-[#eb9ab4] border border-[#c62c5d] hover:border-[#c97993] px-3.5 py-2 text-sm font-semibold  text-[#d70044]  gap-2  cursor-pointer">
            Contact me on
            <FaXTwitter />
          </button>
        </Link>
              </motion.div>
      </section>
      <section className="h-[calc(100vh-64px)] gap-5 flex flex-col justify-start items-center py-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`${satisfy.className} scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl`}
        >
          Built completely on open source technologies
        </motion.h1>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex gap-4 p-5"
        >
          <RiTailwindCssFill size={50} />
          <FaReact size={50} />
          <SiShadcnui size={50} />
          <TbBrandFramerMotion size={50} />
          <TbBrandNextjs size={50} />
        </motion.div>
      </section>
    </main>
  );
}
