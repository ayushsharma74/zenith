'use client'
import { useState } from "react"
import { BiCheck, BiCopy } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function ComponentPreview(){
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("hi");
            setCopied(true);
        } catch (error) {
            setCopied(false);
        }

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div>
            <div>
                <button onClick={() => setActiveTab("preview")}>Preview</button>
                <button onClick={() => setActiveTab("code")}>Code</button>
            </div>

            <div className="max-w-3xl">
                {activeTab === "preview" && <div className=" py-52 border flex items-center justify-center rounded-sm" >
                    <div  className="relative inline-block text-lg group">
          <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#FEE8C2]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-zinc-800 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get Started</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </div>
                    </div>}
                {activeTab === "code" && <div className="border rounded-sm relative">
                    {copied ? <BiCheck size={22} className="absolute right-4 top-4"/> : 
                    <BiCopy
                          className="hover:cursor-pointer absolute right-4 top-4"
                          onClick={copyToClipboard}
                          size={22}
                        />
                    }

                    <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{background: "transparent"}}>
                        const a = 13;
                    </SyntaxHighlighter>
                </div>}
            </div>
        </div>
    )
}