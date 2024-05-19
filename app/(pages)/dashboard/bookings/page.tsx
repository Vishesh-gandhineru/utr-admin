import React from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import BookingCard from '@/components/BookingCard/BookingCard'
import { BookingAPI } from '@/lib/BookingAPI'
const page = () => {
  return (
    <DashboardLayout>
      <section>
        <div className='text-3xl mb-8'>Bookings</div>
        <div className='grid grid-cols-3 gap-8'>
            {BookingAPI.map((booking) => {
                return (
                    <BookingCard data={booking} key={booking.id} />
                )
                
            })}
          {/* <BookingCard upcoming={true} vendor="Stay Vista" />
          <BookingCard upcoming={true} vendor="Stay Vista" />
          <BookingCard cancelled={true} vendor="Booking.com" />
          <BookingCard cancelled={true} vendor="Booking.com" />
          <BookingCard upcoming={true} vendor="Stay Vista" />
          <BookingCard cancelled={true} vendor="Booking.com" />
          <BookingCard upcoming={true} vendor="Airbnb"/>
          <BookingCard completed={true} vendor="Expedia"/>
          <BookingCard completed={true} vendor="Expedia"/>
          <BookingCard completed={true} vendor="Expedia"/>
          <BookingCard upcoming={true} vendor="Airbnb"/>
          <BookingCard completed={true} vendor="Airbnb"/>
          <BookingCard completed={true} vendor="Airbnb"/>
          <BookingCard completed={true} vendor="Airbnb"/>
          <BookingCard upcoming={true} vendor="Airbnb"/>
          <BookingCard cancelled={true} vendor="Stay Vista"/>
          <BookingCard cancelled={true} vendor="Stay Vista"/> */}
        </div>
      </section>
    </DashboardLayout>
  )
}

export default page