import { FilterMenubar } from '@/components/FilterMenubar'
import React from 'react'
import SectionOne from '../orders/_components/SectionOne'
import { CardContainer } from '../orders/_components/CardContainer'

const page = () => {
  return (
    <div className="h-full w-full space-y-2 pb-20">
    <FilterMenubar />
    <SectionOne />
    <CardContainer/>
  </div>
  )
}

export default page