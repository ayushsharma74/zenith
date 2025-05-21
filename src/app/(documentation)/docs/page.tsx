"use client";

import { useScroll, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Page() {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const inView1 = useInView(ref1, { margin: "-50% 0px -50% 0px" });
  const inView2 = useInView(ref2, { margin: "-50% 0px -50% 0px" });
  const inView3 = useInView(ref3, { margin: "-50% 0px -50% 0px" });


  return (
    <div className="flex justify-between">
      <div>
        <div className="h-[100vh]"  ref={ref1}>Installation</div>
        <div className="h-[100vh]" ref={ref2} >Getting Started</div>
        <div className="h-[100vh]" ref={ref3}>Sec3</div>
      </div>
      <div className="fixed right-10 p-5">
        <h1>On this page</h1>
        <ul>
          <motion.li  animate={inView1 ? {x: "10px"}: {}}>Installation</motion.li>
          <motion.li animate={inView2 ? {x: "10px"} : {}}>Getting Started</motion.li>
          <motion.li  animate={inView3 ? {x: "10px"} : {}}>Sec 3</motion.li>
        </ul>
      </div>
    </div>
    
  );
}
