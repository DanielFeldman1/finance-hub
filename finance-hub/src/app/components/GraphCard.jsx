import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
export default function GraphCard({ title, chartData, graphColor }) {
  return (
    <div className="rounded-2xl shadow-md bg-white p-10 m-10 border-1 border-gray-300 hover:shadow-2xl duration-500">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Line
        data={{
          labels: chartData.map((data) => data.label),
          datasets: [
            {
              label: "USD",
              data: chartData.map((data) => data.balance),
              backgroundColor: graphColor ,
              borderColor: graphColor ,
            },
          ],
        }}
      />
    </div>
  );
}
