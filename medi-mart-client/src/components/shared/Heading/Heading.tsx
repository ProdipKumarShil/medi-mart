import { IHeading } from '@/lib/Interface/IHeadint'
import React from 'react'

const Heading: React.FC<IHeading> = ({heading, subHeading, text}) => {
  return (
    <div className='space-y-5 '>
      <p className='text-xl font-bold text-mediRed'>{subHeading}</p>
      <p className='text-[#0D0D0D] text-[40px] font-semibold'>{heading}</p>
      <p className='text-mediTextSecondary'>{text}</p>
    </div>
  )
}

export default Heading