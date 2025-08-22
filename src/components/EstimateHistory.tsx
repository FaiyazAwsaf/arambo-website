"use client";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { period: "5y", value: 15, label: "5y" },
  { period: "3y", value: 25, label: "3y" },
  { period: "1y", value: 35, label: "1y" },
  { period: "6m", value: 45, label: "6m" },
  { period: "1m", value: 50, label: "1m" },
  { period: "current", value: 65, label: "Current" },
];

const monthlyEstimates = [
  { month: "Aug 2025", value: "৳52,000,000" },
  { month: "Sep 2025", value: "৳52,000,000" },
  { month: "Oct 2025", value: "৳52,000,000" },
  { month: "Nov 2025", value: "৳52,000,000" },
  { month: "Dec 2025", value: "৳52,000,000" },
];

export default function EstimateHistory() {
  const [selected, setSelected] = useState("Jul 2025");

  return (
    <div className="mt-8 bg-Arambo-White rounded-xl">
      <div className=" rounded-xl ">
        {/* Header */}
        <div className="flex items-center py-4 px-6 border-b border-Arambo-Border justify-end ">
          <select className="flex cursor-pointer items-center outline-none gap-2 bg-white px-4 py-2 rounded-lg transition-colors">
            <option value="Jul 2025" className="label-16">
              Jul 2025
            </option>
            <option value="Aug 2025" className="label-16">
              Aug 2025
            </option>
            <option value="Sep 2025" className="label-16">
              Sep 2025
            </option>
            <option value="Oct 2025" className="label-16">
              Oct 2025
            </option>
            <option value="Nov 2025" className="label-16">
              Nov 2025
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 p-3  lg:grid-cols-3 ">
          {/* Left Side - Monthly Estimates */}
          <div className="flex px-5 pt-5 rounded-xl min-w-[250px] pb-2 bg-Arambo-Background flex-col">
            <p className="text-base text-center font-medium mb-5">
              Home value:
            </p>

            <div className="">
              {monthlyEstimates.map((estimate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-Arambo-Border"
                >
                  <span className="text-gray-900 font-medium">
                    {estimate.month}
                  </span>
                  <span className="text-Arambo-Accent font-semibold">
                    {estimate.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center px-3 py-4 rounded-lg gap-4 bg-Arambo-White">
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <img src="/property-single/arrowleft.svg" alt="" />
              </button>
              <div className="flex items-center gap-2">
                <button className="text-sm text-Arambo-Text">01</button>
                <button className=" text-xs font-bold text-white bg-Arambo-Accent p-1 rounded-sm">
                  02
                </button>
                <button className="text-sm text-Arambo-Text">03</button>
                <button className="text-sm text-Arambo-Text">04</button>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <img src="/property-single/arrowright.svg" alt="" />
              </button>
            </div>
          </div>

          {/* Right Side - Bar Chart */}
          <div className="bg-Arambo-white col-span-2  rounded-lg p-2">
            <div className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 75]}
                    tickFormatter={(value) => `${value}M`}
                  />
                  <Bar
                    dataKey="value"
                    fill="#1946BB"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
