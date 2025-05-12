"use client"

import { useTheme } from "next-themes";


const darkgradient =
  "bg-gradient-to-br from-[#2c2831] via-[#542c39] to-[#2c2831]";
const lightgradient =
  " bg-gradient-to-br from-[#ada2bb] via-[#f699b6] to-[#ada2bb]";

export default function Page(){
    const { theme } = useTheme();
    return (
        <div className={`${theme == "dark" ? darkgradient : lightgradient} h-[calc(100vh)]`}>
            <h1>Documentation</h1>
        </div>
    )
}