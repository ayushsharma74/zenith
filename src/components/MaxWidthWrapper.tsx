"use client";

import { useTheme } from "next-themes";

const darkgradient =
  "bg-gradient-to-br from-[#2c2831] via-[#542c39] to-[#2c2831]";
const lightgradient =
  " bg-gradient-to-br from-[#ada2bb] via-[#f699b6] to-[#ada2bb]";
export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full  ${
        theme === "dark" ? darkgradient : lightgradient
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">{children}</div>
    </div>
  );
}
