'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className='bg-mediSecondary py-6'>
      <div className="flex items-center justify-between screen-lg ">
        <p className='text-2xl font-bold text-mediPrimary'>MediMart</p>
        <div className="lg:flex gap-16 items-center hidden">
          <ul className="flex gap-6 items-center">
            <li className='hover:underline'><Link href='#'>Home</Link></li>
            <li className='hover:underline'><Link href='#'>Products</Link></li>
            <li className='hover:underline'><Link href='#'>Services</Link></li>
            <li className='hover:underline'><Link href='#'>About Us</Link></li>
            <li className='hover:underline'><Link href='#'>Contact Us</Link></li>
          </ul>
          <div className="flex gap-4 items-center py-3 px-5 bg-mediPrimary rounded-full">
            <PhoneCall className='text-white size-5' />
            <p className='text-[14px] font-medium text-white'>+8804482983</p>
          </div>
        </div>

        {/* side bar */}
        {isMounted && <Sheet>
          <Button className='lg:hidden' variant='outline' size='icon'><SheetTrigger><MenuIcon /></SheetTrigger></Button>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle><p className='text-2xl pb-4 font-bold text-mediPrimary'>MediMart</p></SheetTitle>
              <SheetDescription className=''>
                <ul className="flex flex-col gap-2">
                  <li ><Link className='border p-2 bg-mediSecondary hover:bg-mediPrimary hover:text-white rounded-md block' href='#'>Home</Link></li>
                  <li ><Link className='border p-2 bg-mediSecondary hover:bg-mediPrimary hover:text-white rounded-md block' href='#'>Products</Link></li>
                  <li ><Link className='border p-2 bg-mediSecondary hover:bg-mediPrimary hover:text-white rounded-md block' href='#'>Services</Link></li>
                  <li ><Link className='border p-2 bg-mediSecondary hover:bg-mediPrimary hover:text-white rounded-md block' href='#'>About Us</Link></li>
                  <li ><Link className='border p-2 bg-mediSecondary hover:bg-mediPrimary hover:text-white rounded-md block' href='#'>Contact Us</Link></li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>}
      </div>
    </div>
  )
}

export default Navbar