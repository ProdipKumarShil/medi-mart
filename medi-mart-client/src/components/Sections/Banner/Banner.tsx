import Image from 'next/image'
import React from 'react'
import img from '@/assets/banner/doctor2.jpg'
import usr from '@/assets/users/usr.jpg'
import usr2 from '@/assets/users/usr2.jpg'
import usr3 from '@/assets/users/usr3.jpg'
import usr4 from '@/assets/users/usr4.jpg'

const Banner = () => {
  return (
    <div className='bg-mediSecondary'>
      <div className="screen-lg grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex items-center">
          <div className="space-y-10">
            <p className='text-[#D64779] text-xl font-bold'>Pharmachy Store</p>
            <p className='text-[64px] text-[#0D0D0D] font-semibold'>Your Trusted Pharmacy Store</p>
            <p className='text-[16px] font-medium text-[#7A7A7A]'>Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam.</p>
            <div className="hidden lg:flex flex-col justify-center">
              <div className="relative"> {/* image container */}
                <Image className='rounded-full absolute ' src={usr} alt='usr' width={54} height={54} />
                <Image className='rounded-full absolute left-11' src={usr2} alt='usr' width={54} height={54} />
                <Image className='rounded-full absolute left-[88px]' src={usr3} alt='usr' width={54} height={54} />
                <Image className='rounded-full absolute left-[132px]' src={usr4} alt='usr' width={54} height={54} />
              </div>
              <div className=" ml-[220px]"> {/* text container */}
                <p className='text-xl font-semibold text-mediRed'>100k+</p>
                <p className='font-medium'>Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image className=' rounded-t-2xl w-full md:w-[464px] h-[530px] object-cover md:mt-10' src={img} width={1000} height={2000} alt='doctor' />
        </div>
      </div>
    </div>
  )
}

export default Banner