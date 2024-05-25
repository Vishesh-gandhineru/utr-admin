"use client"

import React from "react";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { BookingAPI } from "@/lib/BookingAPI";
import BookingCard from "@/components/BookingCard/BookingCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SimpleBarChart } from "@/components/AnalyticsComponents/BarChart";
type VendorSinglePageProps = {
  params: {
    slug: string;
  };
};



const VendorSinglePage = ({ params }: VendorSinglePageProps) => {
  const { slug } = params;


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

    router.push(`${pathname}${query}` , { scroll: false });
  };


  const monthSale = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    { 
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ]

  return (
    <DashboardLayout>
      <div>
        <div>
          <h1 className="text-2xl my-6">Vendor Single page for {slug}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a className="text-blue-600 hover:underline" href="#">
                  info@acme.com
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>
                +1 (555) 555-5555{"\n                    "}
              </div>
              <div>
                <span className="font-medium">Address:</span>
                <div>
                  123 Main St.
                  <br />
                  Anytown, CA 12345
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Total Sales:</span>
                $250,000{"\n                    "}
              </div>
              <div>
                <span className="font-medium">Average Order Value:</span>
                $75{"\n                    "}
              </div>
              <div>
                <span className="font-medium">Top Selling Products:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Acme Wireless Headphones</li>
                  <li>Acme Smart Home Hub</li>
                  <li>Acme Organic Cotton T-Shirts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ratings & Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Overall Rating:</span>
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="ml-2 text-sm">(4.2 / 5)</span>
                </div>
              </div>
              <div>
                <span className="font-medium">Total Reviews:</span>
                125{"\n                    "}
              </div>
              <div>
                <span className="font-medium">Recent Reviews:</span>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          2 days ago
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Great products and excellent customer service. Highly
                        recommend!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          5 days ago
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Im very satisfied with my purchase. The product is
                        exactly as described and the shipping was fast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
<div className="flex justify-between align-middle">
          <h1 className="my-8 text-2xl">Upcoming bookings</h1>

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
        <div className='grid grid-cols-3 gap-8 my-6'>
 
        {BookingAPI.filter(booking => booking.status === `${search ? search : "upcoming"}` && booking.vendor === "Stay Vista").map(booking => {
    
      if (!booking) return <p key="noFound">NO Booking Found</p>;    
  return (
      <BookingCard data={booking} key={booking.id} />
  )
          }
          )}
        </div>
        <h1 className="my-8 text-2xl">Monthly sales</h1>
        <SimpleBarChart data={monthSale} />
      </div>
    </DashboardLayout>
  );
};

export default VendorSinglePage;

function StarIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
