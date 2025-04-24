import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportsGraph = ({ reports }) => {
  // Process reports data to count reports per day
  const reportCounts = reports.reduce((acc, report) => {
    const date = report.incidentDateTime.split(" ")[0]; // Extract the date part
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(reportCounts).sort(); // Dates in sorted order
  const data = Object.values(reportCounts);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Number of Reports",
        data,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Reports Per Day</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ReportsGraph;
