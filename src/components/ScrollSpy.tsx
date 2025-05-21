// "use client";

// import { useInView, motion } from "motion/react"; 
// import { useEffect, useState } from "react";

// type Section = {
//   id: string;
//   label: string;
//   ref: React.RefObject<HTMLElement>;
// };

// export default function ScrollSpy({ sections }: { sections: Section[] }) {
//   const [activeId, setActiveId] = useState<string | null>(null);

//   // Set up inView observers
//   const inViews = sections.map((section) => {
//     const inView = useInView(section.ref, { margin: "-50% 0px -50% 0px" });
//     return { id: section.id, inView };
//   });

//   useEffect(() => {
//     const active = inViews.find((v) => v.inView);
//     if (active?.id) {
//       setActiveId(active.id);
//     }
//   }, [inViews.map(v => v.inView).join()]); // re-run on any inView change

//   return (
//     <div className="fixed right-10 top-10">
//       <h1 className="font-bold mb-2">On this page</h1>
//       <ul className="space-y-2">
//         {sections.map((section) => (
//           <motion.li
//             key={section.id}
//             animate={activeId === section.id ? { x: 10 } : { x: 0 }}
//             style={{
//               color: activeId === section.id ? "red" : "black",
//               transition: "color 0.3s ease"
//             }}
//           >
//             {section.label}
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// }
