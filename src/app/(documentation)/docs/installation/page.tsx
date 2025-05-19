'use client'
import CodeBlock from "@/components/atoms/CodeBlock";
import Breadcrumb from "@/components/Breadcrumb";
import { useInView } from "motion/react";
import { useRef } from "react";

const items = [
  { label: "Documentation", href: "/docs" },
  { label: "Installation", href: "/docs/installation" },
]

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
        <Breadcrumb items={items} />
        <section id="installation">
          <h1 className="text-3xl font-bold mb-4">Installation</h1>
          <p className="mb-4">
            To get started with the component library, run the following command
            in your project:
          </p>
          <CodeBlock>
            npx shadcn-ui@latest init
          </CodeBlock>
          
        </section>

        <section id="prerequisites">
          <h2 className="text-2xl font-semibold mt-10 mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>React 18 or newer</li>
            <li>Next.js 13+ (App Router)</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
        </section>

        <section id="commands">
          <h2 className="text-2xl font-semibold mt-10 mb-4">Usage Commands</h2>
          <p className="mb-2">To add components from the library:</p>
          <CodeBlock>
            npx shadcn-ui@latest add button
          </CodeBlock>
          <p className="mt-4">
            Replace <code>button</code> with the name of any component
            you&apos;d like to add.
          </p>
        </section>
      </div>
      <div className="flex justify-between">
    /
        <div className="">
          <h1>On this page</h1>
          <ul>
            <li style={inView1 ? { color: "red" } : {}}>Installation</li>
            <li style={inView2 ? { color: "red" } : {}}>Getting Started</li>
            <li style={inView3 ? { color: "red" } : {}}>Sec 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
