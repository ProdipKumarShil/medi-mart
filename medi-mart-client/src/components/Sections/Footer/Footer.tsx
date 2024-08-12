import { BriefcaseMedical } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-mediPrimary pt-14 pb-10'>
      <div className="screen-lg">
        <div className="flex gap-4 items-center mb-10">
          <div className="size-12 rounded-full bg-white flex justify-center items-center">
            <BriefcaseMedical className='text-mediPrimary size-6' />
          </div>
          <div className="">
            <p className='text-[24px] font-semibold text-white'>MediMart</p>
            <p className='text-sm text-mediTextSecondary font-semibold'>Store</p>
          </div>
        </div>
        <hr className='border-[#3C7FFF] mb-12'/>
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="flex gap-12 mb-8 md:mb-0">
            <div className="">
              <p className='text-[24px] font-semibold mb-5 text-white'>Company</p>
              <ul className='text-mediSecondary space-y-6'>
                <li><Link href='#'>About Us</Link></li>
                <li><Link href='#'>Products</Link></li>
                <li><Link href='#'>Services</Link></li>
                <li><Link href='#'>Blog & News</Link></li>
              </ul>
            </div>
            <div className="">
              <p className='text-[24px] font-semibold mb-5 text-white'>Recourse</p>
              <ul className='text-mediSecondary space-y-6'>
                <li><Link href='#'>Educational</Link></li>
                <li><Link href='#'>Mental Health Resourece</Link></li>
                <li><Link href='#'>Medicine</Link></li>
                <li><Link href='#'>Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className='text-2xl font-semibold text-white mb-5'>Follow Our Social Media</p>
            <div className="flex max-w-sm flex-wrap md:justify-end gap-3">
              <div className="px-[18px] py-[14px] rounded-full bg-[#202020] text-white">Instagram</div>
              <div className="px-[18px] py-[14px] rounded-full bg-[#202020] text-white">Youtube</div>
              <div className="px-[18px] py-[14px] rounded-full bg-[#202020] text-white">Facebook</div>
              <div className="px-[18px] py-[14px] rounded-full bg-[#202020] text-white">Linkedin</div>
              <div className="px-[18px] py-[14px] rounded-full bg-[#202020] text-white">Twitter</div>
            </div>
          </div>
        </div>
        <hr className='border-[#3C7FFF] my-10'/>
        <div className="text-mediSecondary flex items-center justify-between">
          <p className=''>Copyright © 2023 Pharmacy Store</p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer