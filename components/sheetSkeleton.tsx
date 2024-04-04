import React from 'react'

const SheetSkeleton = () => {
  return (
    <div className="!h-[100vh] w-full space-y-2 p-1">
    <div className="flex h-[70%] w-full items-center space-x-2">
      <div className=" h-full w-1/2 animate-pulse rounded-2xl border bg-tertiaryBackground"></div>
      <div className=" h-full w-1/2 space-y-2">
        <div className=" h-[48%] w-full animate-pulse rounded-2xl border bg-tertiaryBackground"></div>
        <div className=" h-1/2 w-full animate-pulse rounded-2xl border bg-tertiaryBackground"></div>
      </div>
    </div>
    <div className="h-[30%] w-full animate-pulse rounded-2xl border bg-tertiaryBackground"></div>
  </div>
  )
}

export default SheetSkeleton