"use client";

import * as React from "react";
import {
  BarChart,
  Bell,
  BookOpen,
  ChevronRight,
  ChevronsUpDown,
  Home,
  LogOut,
  Plus,
  Settings,
  User,
  BarChart3Icon
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", icon: BarChart, id: "dashboard", href: "/dashboard" },
  {
    name: "All Bookings",
    icon: BookOpen,
    id: "all-bookings",
    href: "/dashboard/bookings",
  },
  {
    name: "Customers",
    icon: User,
    id: "customers",
    href: "/dashboard/customers",
  },
  {
    name: "Vendors",
    icon: Home,
    id: "vendors",
    href: "/dashboard/vendor",
  },
  {
    name: "Analytics",
    icon: BarChart3Icon,
    id: "analytics",
    href: "/dashboard/analytics",
  },
];

const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatars/john-doe.jpg",
};

export default function SideBar() {
  return (
    <Sidebar collapsible="icon" className="flex justify-center items-center">
      <SidebarHeader className="pb-8">
        <SidebarMenu>
        
              <Link className="hidden lg:flex" href="/">
                <img
                  src="/utr_white_logo.png"
                  alt="utr logo"
                  className="w-[80%]"
                />
              </Link>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (         
              <SidebarMenuItem>             
               <Link href={item.href}>
                  <SidebarMenuButton tooltip={item.name}>
                    <item.icon />
                    <span>{item.name}</span>
                  </SidebarMenuButton>   
                  </Link>     
              </SidebarMenuItem>
          
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="pb-8">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
