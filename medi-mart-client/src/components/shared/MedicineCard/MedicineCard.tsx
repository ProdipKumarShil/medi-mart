import { IMedicineCard } from '@/lib/Interface/IMedicineCard'
import Image from 'next/image'
import React from 'react'

const MedicineCard: React.FC<IMedicineCard> = ({id, image, name, price}) => {
  return (
    <div>
      <Image className='w-full h-[354px] object-cover rounded-2xl mb-[14px]' src={image} width={1000} height={2000} alt='drug'/>
      <p className='text-2xl font-semibold'>{name}</p>
      <p className='text-lg font-medium text-mediPrimary'>${price}</p>
    </div>
  )
}

export default MedicineCard