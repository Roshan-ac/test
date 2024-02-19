"use client";
import { BadgeDollarSign, MessageCircleMore } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options1 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [89, 73, 24],
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,

      hollow: {
        margin: 5,
        size: "30%",
        background: "transparent",
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: ["#2e2536", "#414f33", "#473b32"],
        strokeWidth: "97%",
        opacity: 1,
        margin: 16,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        total: {
          show: false,
          label: "TOTAL",
        },
      },
    },
  },
  labels: ["Total", "Completed", "Failed"],
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

const ChartOne = () => {
  return (
    <div className=" m-4 grid grid-cols-3 gap-4">
      <div className="  flex items-center  justify-center rounded-xl bg-primaryBackground ">
        <Chart
          options={{
            title: {
              text: "Orders",
              offsetX: 60,
              offsetY: 10,
              style: { fontSize: "16px", color: "#FAFAFB", fontWeight: 500 },
            },

            subtitle: {
              text: "March 20",
              offsetX: 60,
              offsetY: 35,
              style: { fontSize: "14px", color: "#B5B5BE", fontWeight: 400 },
            },

            plotOptions: options1.plotOptions,
            labels: options1.labels,
            series: [{ name: "total", data: options1.series }],
            fill: {
              colors: ["#A461D8", "#82C43C", "#FF974A"],
            },

            legend: {
              show: true,
              position: "bottom",
              fontSize: "16px",
              fontWeight: "600",
              markers: {
                radius: 1,
                fillColors: ["#A461D8", "#82C43C", "#FF974A"],
                offsetY: -15,
                offsetX: 12,
              },
              formatter(legendName, opts) {
                console.log(options1);
                return `<div class=" mx-3 p-2 space-y-1">
                     <p class=" text-primaryText">${
                       opts.w.globals.series[opts.seriesIndex]
                     }</p>
                     <p class=" -ml-6 text-secondaryText text-base font-medium">${legendName}</p>
                     </div>`;
              },
            },
          }}
          series={options1.series}
          type="radialBar"
          width={450}
          height={450}
        />
      </div>
      <div className="  relative flex flex-col items-center justify-center rounded-xl bg-primaryBackground ">
        <div className=" absolute left-4 top-4">
          <p className=" text-[16px] font-[500] text-primaryText">
            Credits Earned{" "}
            <span className=" mx-2 text-[14px] font-medium text-secondaryText">
              | March 2020
            </span>{" "}
          </p>
        </div>
        <Chart
          options={{
            ...options2.options,

            colors: ["#FF974A"],
            tooltip: {
              theme: "dark",
            },
            markers: {
              size: 8,
              colors: ["#FFFFFF"],
              strokeColors: "#FF974A",
              strokeWidth: 3,
            },
            fill: {
              gradient: {
                //   enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0,
              },
            },
            chart: {
              foreColor: "red",
              offsetY: 50,
              toolbar: {
                show: false,
              },
            },
            title: {
              text: "145,250 INR",
              offsetX: 20,
              style: { fontSize: "36px", color: "#FAFAFB", fontWeight: 500 },
            },

            subtitle: {
              text: "Won from 730 Deals",
              offsetX: 20,
              offsetY: 56,
              margin: 1,
              style: { fontSize: "14px", color: "#B5B5BE", fontWeight: 400 },
            },
          }}
          series={options2.series}
          type="area"
          height={360}
          width={360}
        />
      </div>
      <div className=" flex flex-col justify-between space-y-2">
        <div className=" flex h-[48%]  items-center justify-center gap-6 rounded-xl bg-primaryBackground ">
          <div>
            <BadgeDollarSign size={44} color="#A461D8" />
          </div>
          <div className=" space-y-2">
            <p className=" text-3xl font-bold text-primaryText">126/2034</p>
            <p className=" text-xl text-secondaryText"> Leads Converted</p>
          </div>
        </div>
        <div className=" flex h-[48%]  items-center justify-center gap-6 rounded-xl bg-primaryBackground ">
          <div>
            <MessageCircleMore size={44} color="#82C43C" />
          </div>
          <div className=" space-y-2">
            <p className=" text-3xl font-bold text-primaryText">34</p>
            <p className=" text-xl text-secondaryText"> Corporate Queries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
