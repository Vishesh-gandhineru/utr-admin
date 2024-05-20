import React from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import CustomerProfileCard from '@/components/CustomerCard/CustomerProfileCard'
const page = () => {
  return (
    <DashboardLayout>
        <div><h2 className='text-3xl mb-8'>Customer</h2></div>
        <div className='grid grid-cols-3 gap-6'>
        <CustomerProfileCard />
        <CustomerProfileCard />
        <CustomerProfileCard />
        <CustomerProfileCard />
        <CustomerProfileCard />
        </div>
    </DashboardLayout>
  )
}

export default page