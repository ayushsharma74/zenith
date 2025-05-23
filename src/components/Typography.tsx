import React from "react";

export function TypographyH1({children}: {children: React.ReactNode}) {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    )
  }

  export function TypographyH2({children}: {children: React.ReactNode}) {
    return (
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
         {children}
      </h2>
    )
  }

  export function TypographyH4({children}: {children: React.ReactNode}) {
    return (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
       {children}
      </h4>
    )
  }

  export function TypographyP({children}: {children: React.ReactNode}) {
    return (
      <p className="leading-7">
        {children}
      </p>
    )
  }
  