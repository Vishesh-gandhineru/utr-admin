import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b-2">
      <Link className="hidden lg:flex" href="/">
        <img src="/utr_white_logo.png" alt="utr logo" className="w-[80%]" />
      </Link>
      <div className="ml-auto flex gap-5">
        <Button asChild><Link href="/dashboard">Dashboard</Link></Button>
      </div>
    </header>
  )
}

