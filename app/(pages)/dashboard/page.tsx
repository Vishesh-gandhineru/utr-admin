"use client"
import React, { ChangeEvent } from 'react'
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout'
import BookingCard from '@/components/BookingCard/BookingCard'
import { BookingAPI } from '@/lib/BookingAPI'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation";




const page = () => {

  const [Status, setStatus] = React.useState('upcoming')
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("status");

  const onSelect = (event: string) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    // update as necessary
    const value = event.trim();

    if (!value) {
      current.delete("selected");
    } else {
      current.set("status", event);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };
console.log(Status)
  return (
    <DashboardLayout>
      <section>
        <div className='flex justify-between items-start'>
        <h2 className='text-3xl mb-8'>Dashboard</h2>
        <div className='flex items-center justify-center gap-3'>
          <h4>Sort by Status</h4>
        <Select onValueChange={(current)=> {
          setStatus(current)
          onSelect(current)
          
        }} defaultValue={Status}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="upcoming">Upcoming</SelectItem>
    <SelectItem value="cancelled">Cancelled</SelectItem>
    <SelectItem value="completed">Completed</SelectItem>
  </SelectContent>
</Select>
        </div>

        </div>
        <div className='grid grid-cols-3 gap-8'>
          {BookingAPI.filter(booking => booking.status === `${search ? search : "upcoming"}`).map(booking => (
            <BookingCard data={booking} key={booking.id} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}

export default page