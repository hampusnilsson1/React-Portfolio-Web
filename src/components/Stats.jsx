import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0,
  },
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
        color: "rgb(224, 224, 224)",
      },
      min: 0,
      max: 100,
      ticks: {
        backdropColor: "rgba(0, 0, 0, 0)",
        color: "rgba(224, 224, 224, 0.73)",
        font: {
          size: 12,
        },
      },
    },
  },
};

const data = {
  labels: [
    "Version Control",
    "Backend",
    "Frontend",
    "Game Development",
    "Fitness",
    "Database",
  ],
  datasets: [
    {
      data: [65, 85, 75, 68, 85, 89],
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

function Stats() {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setChartKey((prevKey) => prevKey + 1);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 40 }}
      className="flex justify-center w-full h-full"
    >
      <div style={{ width: "100%", height: "500px" }}>
        <Radar key={chartKey} data={data} options={options} />
      </div>
    </motion.div>
  );
}

export default Stats;
