import React from "react";
import Chart from "react-apexcharts";
import CommonChart from "./CommonChart";
import CommonChart2 from "./CommonChart2";

const BarChart = () => {
  return (
    <div className=" m-5">
      <h3>Bar Chart</h3>
      <br />
      <hr />
      <br />
      <div className=" d-flex gap-3 flex-wrap">
        <CommonChart type={"bar"} />
        <CommonChart type={"line"} />
        <CommonChart type={"area"} />
        <CommonChart type={"radar"} />
        <div className=" d-flex g-5">
          <CommonChart2 type={"pie"} />
          <CommonChart2 type={"donut"} />
        </div>
        {/* <Chart
          type="bar"
          width={700}
          height={700}
          series={[
            {
              name: "data",
              data: [200, 300, 500, 220, 100, 444],
            },
            {
              name: "data2",
              data: [200, 310, 510, 210, 110, 144],
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
            noData: {
              text: "Empty data",
              style: {
                fontSize: 30,
                color: "#f00",
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
              formatter: (val) => {
                return `$${val}`;
              },
              style: {
                colors: ["#f4f4f4", "f0f"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>

        <Chart
          type="donut"
          width={500}
          height={500}
          series={[100, 230, 300, 400, 222, 345, 100]}
          options={{
            labels: [
              "stock1",
              "stock2",
              "stock3",
              "stock4",
              "stock5",
              "stock6",
              "stock7",
            ],
            title: { text: "BarChart Data", style: { fontSize: 30 } },
            subtitle: { text: "this is stock data collection" },
          }}
        ></Chart>
        <Chart
          type="pie"
          width={500}
          height={500}
          series={[100, 230, 300, 400, 222, 345, 100]}
          options={{
            labels: [
              "stock1",
              "stock2",
              "stock3",
              "stock4",
              "stock5",
              "stock6",
              "stock7",
            ],
            title: { text: "BarChart Data", style: { fontSize: 30 } },
            subtitle: { text: "this is stock data collection" },
          }}
        ></Chart> */}
      </div>
    </div>
  );
};

export default BarChart;
