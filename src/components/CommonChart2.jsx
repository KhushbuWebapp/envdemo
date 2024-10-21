import React from "react";
import Chart from "react-apexcharts";
const CommonChart2 = ({ type }) => {
  return (
    <div>
      <Chart
        type={type}
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
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: 30,
                    color: "#f90000",
                  },
                },
              },
            },
          },
          subtitle: { text: "this is stock data collection" },
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

export default CommonChart2;
