import React from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import VendorCard from '@/components/vendorsComponents/VendorCard'
const page = () => {
  return (
    <DashboardLayout>
      <div>
        <div>
        <h1 className='px-4 md:px-6'>Vendor</h1>
        </div>
        <div className='grid grid-cols-2 gap-8'>
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default page