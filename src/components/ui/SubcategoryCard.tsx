"use client"

import { FC } from 'react'
import { Subcategory } from '@/types'
import { useRouter } from 'next/navigation'

interface SubcategoryCardProps {
  data: Subcategory
}

const SubcategoryCard: FC<SubcategoryCardProps> = ({ data }) => {


  const router = useRouter()
  
  const handleClick = () => {
    router.push(`/subcategory/${data.id}`)
  }

  
  return (
    <div 
      onClick={handleClick}
      className='cursor-pointer'
    >
      <h2 className="font-semibold text-sm md:text-lg hover:text-custom-purple">{data.name}</h2>
    </div>
  )
}

export default SubcategoryCard