'use client'
import React, { useState } from 'react'
import { PrimaryTable } from './PrimaryTable'
import { SheetDemo } from './SelectedInfo'

const SectionOne = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex w-full gap-4 p-6">
    <div className="w-full  rounded-[12px] bg-primaryBackground py-4">
      <PrimaryTable setIsOpen={setIsOpen} />
    </div>
      <SheetDemo setIsOpen={setIsOpen} isOpen={isOpen} />
  </div>
  )
}

export default SectionOne