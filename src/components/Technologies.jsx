import React from "react";
import { useState } from "react";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      grid: {
        color: "rgba(0, 0, 0, 0.16)",
      },
      pointLabels: {
        font: {
          size: 14,
          weight: "bold",
        },
        color: "rgb(224, 224, 224)", // This changes the text color
      },
      min: 0,
      max: 100,
      ticks: {
        backdropColor: "rgba(0, 0, 0, 0)",
        color: "rgba(224, 224, 224, 0.73)", // Change the color of the numbers (0-100)
        font: {
          size: 12,
        },
      },
    },
  },
};

const data = {
  labels: [
    "Frontend",
    "Backend",
    "Version Control",
    "Game Development",
    "Fitness",
    "Database",
  ],
  datasets: [
    {
      data: [75, 85, 65, 68, 85, 89],
      fill: true,
      backgroundColor: "rgba(134, 239, 173, 0.32)",
      borderColor: "rgb(99, 192, 133)",
      pointBackgroundColor: "rgba(134, 239, 172, 0.5)",
      pointBorderColor: "rgba(199, 255, 220, 0.79)",
      pointHoverBackgroundColor: "rgba(45, 173, 92, 0.79)",
      pointHoverBorderColor: "rgba(134, 239, 172, 0.5)",
    },
  ],
};

function Technologies() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-12 mx-48">
      <div className="w-full lg:w-1/2">
        <h1 className="text-center text-green-300 text-4xl font-bold -translate-x-6">
          Technologies
        </h1>
        <Radar data={data} options={options} />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-center text-green-300 text-4xl font-bold">
          Tools?
        </h1>
      </div>
    </section>
  );
}

export default Technologies;
