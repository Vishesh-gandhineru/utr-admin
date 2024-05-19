"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col items-start justify-start gap-8 border-r mt-8 pr-5">
      <nav className="grid w-full gap-6 text-sm font-medium">
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400  ${
            pathname === "/dashboard" ? "bg-gray-100 dark:text-gray-900" : ""
          }`}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400  ${
            pathname === "/dashboard/bookings"
              ? "bg-gray-100 dark:text-gray-900"
              : ""
          }`}
          href="/dashboard/bookings"
        >
          Bookings
        </Link>

        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400  ${
            pathname === "/dashboard/customers"
              ? "bg-gray-100 dark:text-gray-900"
              : ""
          }`}
          href="/dashboard/customers"
        >
          Customers
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400  ${
            pathname === "/dashboard/analytics"
              ? "bg-gray-100 dark:text-gray-900"
              : ""
          }`}
          href="/dashboard/analytics"
        >
          Analytics
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400  ${
            pathname === "/dashboard/vendor"
              ? "bg-gray-100 dark:text-gray-900"
              : ""
          }`}
          href="/dashboard/vendor"
        >
          Vendor
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
