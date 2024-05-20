
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function VendorCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <Avatar>
          <AvatarImage alt="Vendor Avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle>{"John Doe (Stay vista)"}</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Property Vendor</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">120</span>
          <span className="text-gray-500 dark:text-gray-400">Properties Managed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[20px] font-bold">2,345</span>
          <span className="text-gray-500 dark:text-gray-400">Total Bookings</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">$1.2M</span>
          <span className="text-gray-500 dark:text-gray-400">Total Sales</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">4.8</span>
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <span className="text-gray-500 dark:text-gray-400">Rating</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild size="sm" variant="outline" className="w-full">
         <Link href="/dashboard/vendor/stayvista">View Profile</Link> 
        </Button>
      </CardFooter>
    </Card>
  )
}

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
  )
}