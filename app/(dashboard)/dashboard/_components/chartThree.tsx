"use client";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    //   tooltip: {
    //     y: {
    //       formatter: function (val) {
    //         return "$ " + val + " thousands"
    //       }
    //     }
    //   }
  },
};

const ChartThree = () => {
  return (
    <div className="p-4">
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
            ...options.options,
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
          series={options.series}
          type="bar"
          width={1065}
          height={400}
        />
      </div>
    </div>
  );
};

export default ChartThree;
