
import { Badge } from "../ui/badge"
import { CardContent, Card } from "@/components/ui/card"

type BookingCardProps = {
    data?: any;
}

export default function BookingCard({data} : BookingCardProps) {

  return (
    <Card className="w-full max-w-md">
      <div className="relative h-40 overflow-hidden rounded-t-lg">
        <img
          alt="Property Image"
          className="h-full w-full object-cover"
          height={160}
          src="https://via.placeholder.com/300"
          style={{
            aspectRatio: "400/160",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{data.PropertyName}</h3>
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-in</p>
            <p className="text-base font-medium">{data.checkIn}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Check-out</p>
            <p className="text-base font-medium">{data.checkOut}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Guests</p>
            <p className="text-base font-medium">{data.guest}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
            <p className="text-base font-medium">{data.total}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {data.status == "completed" ? <Badge variant="default">Completed</Badge> : null}
          {data.status == "upcoming" ? <Badge variant="secondary">upcoming</Badge> : null}
          {data.status == "cancelled" ? <Badge variant="destructive">Cancelled</Badge> : null}
          {data.vendor && <Badge variant="outline">{data.vendor}</Badge>}
        </div>
      </CardContent>
    </Card>
  )
}