import { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";

export default function CodeBlock({ children }: { children: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
        } catch (error) {
            setCopied(false);
        }

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


  return (
    <pre className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg text-sm overflow-x-auto flex items-center justify-between">
  <code>{children}</code>
  {copied ? (
    <BiCheck size={22} />
  ) : (
    <BiCopy
      className="hover:cursor-pointer"
      onClick={copyToClipboard}
      size={22}
    />
  )}
</pre>
  );
}
