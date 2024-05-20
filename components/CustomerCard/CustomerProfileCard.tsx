
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Separator } from "../ui/separator"

export default function CustomerProfileCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <Avatar>
          <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="font-medium">John Doe</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">Phone Number</span>
          <span>+1 (555) 555-5555</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">Address</span>
          <span>123 Main St, Anytown USA</span>
        </div>
      </CardContent>
    </Card>
  )
}