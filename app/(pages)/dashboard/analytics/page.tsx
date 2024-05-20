import React from "react";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { SimpleBarChart } from "@/components/AnalyticsComponents/BarChart";
const page = () => {
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
  ];
  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="my-8 text-2xl">Monthly sales</h1>
          <SimpleBarChart data={monthSale} />
        </div>
        <div>
          <h1 className="my-8 text-2xl">This Year sales</h1>
          <SimpleBarChart data={monthSale} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
