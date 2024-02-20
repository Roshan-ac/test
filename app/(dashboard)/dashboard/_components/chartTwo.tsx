"use client";
import { BadgeDollarSign, MessageCircleMore } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options1 = {
  options: {
    chart: {
      id: "basic-bar",
    },

    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {
      show: true,
      logBase: 20,
    },
  },
  series: [
    {
      name: "Before Visit",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "After Visit",
      data: [10, 60, 35, 40, 29, 57, 79, 96],
    },
  ],
};
var options2 = {
  series: [
    {
      name: "STOCK ABC",
      data: [20, 300, 500],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
  },
  options: {
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    title: {
      text: "Fundamental Analysis of Stocks",
    },
    subtitle: {
      text: "Price Movements",
    },
    labels: ["2001", "2002", "2003"],
    //   legend: {
    //     horizontalAlign: 'left'
    //   }

    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
};

const ChartTwo = () => {
  return (
    <div className=" m-4 grid grid-cols-2 gap-4">
      <div className=" relative flex items-center  justify-center rounded-xl  bg-primaryBackground pr-4 pt-14 ">
        <div className=" absolute left-4 top-4">
          <p className=" text-[16px] font-[500] text-primaryText">
            Failed Leads{" "}
            <span className=" mx-2 text-[14px] font-medium text-secondaryText">
              | March 2020
            </span>{" "}
          </p>
        </div>
        <Chart
          options={{
            ...options1.options,
            colors: ["#82C43C", "#A461D8"],
            fill: {
              type: "gradient",
            },
            legend: {
              show: true,
              position: "top",
              horizontalAlign: "left",
              itemMargin: { horizontal: 20 },
              fontSize: "16px",
              fontWeight: "600",
              markers: {
                radius: 1,
                fillColors: ["#A461D8", "#82C43C", "#FF974A"],
              },
            },
            grid: {
              borderColor: "#3D3D49",
            },
            xaxis: {
              axisBorder: {
                color: "#3D3D49",
              },
              axisTicks: {
                show: false,
              },
            },
            chart: {
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "straight",
            },
          }}
          series={options1.series}
          type="area"
          width={525}
          height={400}
        />
      </div>
      <div className="  relative flex flex-col items-center justify-center rounded-xl bg-primaryBackground ">
        <div className=" absolute left-4 top-4">
          <p className=" text-[16px] font-[500] text-primaryText">
            Total Completed{" "}
          </p>
          <p className=" text-[14px] font-medium text-secondaryText">
            March 2020
          </p>{" "}
        </div>
        <div className=" w-full h-full my-20 p-4 grid grid-cols-4 grid-rows-4 gap-4 gap-y-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className=" w-full h-full">
              <h2 className="text-xl font-bold">219/350</h2>
              <h3 className=" text-base">Phone</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
