'use client'
import React, { useState } from 'react'
import { PrimaryTable } from './PrimaryTable'
import { SheetDemo } from './SelectedInfo'

const SectionOne = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex w-full gap-4 px-8">
    <div className="w-full py-4  rounded-[12px] bg-primaryBackground">
      <PrimaryTable setIsOpen={setIsOpen} />
    </div>
      <SheetDemo setIsOpen={setIsOpen} isOpen={isOpen} />
  </div>
  )
}

export default SectionOne