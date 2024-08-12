import React from 'react'
import Heading from '../../shared/Heading/Heading'
import MedicineCard from '@/components/shared/MedicineCard/MedicineCard'
import drug from '@/assets/drug/drug1.jpg'

const FeatureSection = () => {
  return (
    <div className='screen-lg py-10'>
      <Heading subHeading='Featured' heading='Featured Pharmacy Essentials' text='Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam.' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
        <MedicineCard id='ddd98wr' image={drug} name='Cefalexin' price={24}/>
        <MedicineCard id='ddd98wr' image={drug} name='Cefalexin' price={24}/>
        <MedicineCard id='ddd98wr' image={drug} name='Cefalexin' price={24}/>
      </div>
    </div>
  )
}

export default FeatureSection