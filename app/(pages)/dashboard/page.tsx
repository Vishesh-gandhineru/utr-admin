"use client"
import React, {Suspense, useState} from 'react'
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
import { Button } from '@/components/ui/button'


export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const search = searchParams.get("status");
  const vendor = searchParams.get("vendor");
  const [Status, setStatus] = useState(search || "")
  const [Vendor, setVendor] = useState( vendor || "")
  const [ResetFilter , setResetFilter] = useState(false);

  const onSelect = (event: string) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    setResetFilter(true)
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

 const HandleVendorChange = (event : string) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    setResetFilter(true)
    // update as necessary
    const value = event.trim();

    if (!value) {
      current.delete("selected");
    } else {
      current.set("vendor", event);
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  
 }

const applyFilters = (bookings: any[], filters: { [x: string]: any; status?: string; vendor?: string }) => {
  return bookings.filter(booking => {
    for (const key in filters) {
      if (filters[key] && booking[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
};
// Usage
  const filters = {
    status : search ,
    vendor : Vendor
  };


  const handleReset = () => {
    router.push(`${pathname}`);
    setResetFilter(false)
    setVendor("")
    setStatus("")
 }


  return (
    <DashboardLayout>
      <section>
        <div className='flex justify-between items-start'>
        <h2 className='text-3xl mb-8'>Dashboard</h2>
        <div className='flex gap-8'>

        <div className='flex items-center justify-center gap-3'>
          <h4>Sort by Status</h4>
          
        <Select onValueChange={(current)=> {
          setStatus(current)
          onSelect(current)
          
        }} defaultValue={Status || ""}>
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
        <div className='flex items-center justify-center gap-3'>
          <h4>Sort by Vendor</h4>
        <Select onValueChange={(current)=> {
          setVendor(current)
          HandleVendorChange(current)
          
        }} defaultValue={Vendor}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Vendor" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Stay Vista">Stay Vista</SelectItem>
    <SelectItem value="Expedia">Expedia</SelectItem>
    <SelectItem value="Booking.com">Booking.com</SelectItem>
    <SelectItem value="Airbnb">Airbnb</SelectItem>
  </SelectContent>
</Select>
{ResetFilter && <Button onClick={handleReset}>Reset</Button>}
        </div>
        </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>

        
              <div className='grid grid-cols-3 gap-8'>
                {applyFilters(BookingAPI, { ...filters, status: filters.status || undefined }).map(booking => (
          <BookingCard data={booking} key={booking.id} />
        ))}
              </div>
            
</Suspense>
      </section>
    </DashboardLayout>
  )
}

// const page = () => {

//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
  
//   const search = searchParams.get("status");
//   const vendor = searchParams.get("vendor");
//   const [Status, setStatus] = useState(search || "")
//   const [Vendor, setVendor] = useState( vendor || "")
//   const [ResetFilter , setResetFilter] = useState(false);

//   const onSelect = (event: string) => {
//     // now you got a read/write object
//     const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
//     setResetFilter(true)
//     // update as necessary
//     const value = event.trim();

//     if (!value) {
//       current.delete("selected");
//     } else {
//       current.set("status", event);
//     }

//     // cast to string
//     const search = current.toString();
//     // or const query = `${'?'.repeat(search.length && 1)}${search}`;
//     const query = search ? `?${search}` : "";

//     router.push(`${pathname}${query}`);
//   };

//  const HandleVendorChange = (event : string) => {
//     // now you got a read/write object
//     const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
//     setResetFilter(true)
//     // update as necessary
//     const value = event.trim();

//     if (!value) {
//       current.delete("selected");
//     } else {
//       current.set("vendor", event);
//     }

//     // cast to string
//     const search = current.toString();
//     // or const query = `${'?'.repeat(search.length && 1)}${search}`;
//     const query = search ? `?${search}` : "";

//     router.push(`${pathname}${query}`);
  
//  }

// const applyFilters = (bookings: any[], filters: { [x: string]: any; status?: string; vendor?: string }) => {
//   return bookings.filter(booking => {
//     for (const key in filters) {
//       if (filters[key] && booking[key] !== filters[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
// };
// // Usage
//   const filters = {
//     status : search ,
//     vendor : Vendor
//   };


//   const handleReset = () => {
//     router.push(`${pathname}`);
//     setResetFilter(false)
//     setVendor("")
//     setStatus("")
//  }


//   return (
//     <DashboardLayout>
//       <section>
//         <div className='flex justify-between items-start'>
//         <h2 className='text-3xl mb-8'>Dashboard</h2>
//         <div className='flex gap-8'>

//         <div className='flex items-center justify-center gap-3'>
//           <h4>Sort by Status</h4>
//         <Select onValueChange={(current)=> {
//           setStatus(current)
//           onSelect(current)
          
//         }} defaultValue={Status || ""}>
//   <SelectTrigger className="w-[180px]">
//     <SelectValue placeholder="Select Status" />
//   </SelectTrigger>
//   <SelectContent>
//     <SelectItem value="upcoming">Upcoming</SelectItem>
//     <SelectItem value="cancelled">Cancelled</SelectItem>
//     <SelectItem value="completed">Completed</SelectItem>
//   </SelectContent>
// </Select>
//         </div>
//         <div className='flex items-center justify-center gap-3'>
//           <h4>Sort by Vendor</h4>
//         <Select onValueChange={(current)=> {
//           setVendor(current)
//           HandleVendorChange(current)
          
//         }} defaultValue={Vendor}>
//   <SelectTrigger className="w-[180px]">
//     <SelectValue placeholder="Select Vendor" />
//   </SelectTrigger>
//   <SelectContent>
//     <SelectItem value="Stay Vista">Stay Vista</SelectItem>
//     <SelectItem value="Expedia">Expedia</SelectItem>
//     <SelectItem value="Booking.com">Booking.com</SelectItem>
//     <SelectItem value="Airbnb">Airbnb</SelectItem>
//   </SelectContent>
// </Select>
// {ResetFilter && <Button onClick={handleReset}>Reset</Button>}
//         </div>
//         </div>

//         </div>
//               <div className='grid grid-cols-3 gap-8'>
//                 {applyFilters(BookingAPI, { ...filters, status: filters.status || undefined }).map(booking => (
//           <BookingCard data={booking} key={booking.id} />
//         ))}
//               </div>
//       </section>
//     </DashboardLayout>
//   )
// }

// export default page