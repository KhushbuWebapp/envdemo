import React from "react";
import Chart from "react-apexcharts";

const CommonChart = ({ type }) => {
  return (
    <div>
      <Chart
        type={type}
        width={700}
        height={700}
        series={[
          {
            name: "data",
            data: [200, 300, 500, 220, 100, 444],
          },
          {
            name: "data2",
            data: [200, 410, 110, 510, 110, 144],
          },
          {
            name: "data3",
            data: [201, 310, 500, 120, 10, 414],
          },
        ]}
        options={{
          title: { text: "BarChart Data", style: { fontSize: 30 } },
          subtitle: { text: "this is stock data collection" },
          colors: ["#f90010", "#fff", "#f0f"],
          chart: { stacked: true, background: "#00f8" },
          plotOptions: {
            bar: {
              borderRadius: 14,
              columnWidth: 30,
              dataLabels: {
                orientation: "vertical",
              },
            },
          },

          theme: { mode: "dark" },
          xaxis: {
            tickPlacement: "on",
            categories: [
              "stock1",
              "stock2",
              "stock3",
              "stock4",
              "stock5",
              "stock6",
            ],

            title: {
              text: "stock Data",
              style: {
                fontSize: 20,
                color: "#ff0",
              },
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { fontSize: 20, colors: ["#ff0"] },
            },
            title: {
              text: "data collection",
              style: { fontSize: 20 },
            },
          },
          grid: {
            borderColor: "#ff0",
          },
          legend: {
            show: true,
            position: "right",
          },
          dataLabels: {
            enabled: false, //for data label display
            formatter: (val) => {
              return `$${val}`;
            },
            style: {
              colors: ["#f4f4f4", "f0f"],
              fontSize: 15,
            },
          },
          noData: {
            text: "Empty data",
            style: {
              fontSize: 30,
              color: "#f00",
            },
          },
        }}
      ></Chart>
    </div>
  );
};

export default CommonChart;
