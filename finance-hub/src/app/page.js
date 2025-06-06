"use client";
import GraphCard from "./components/GraphCard";
import investmentsData from "./data/investmentsData.json";
import bankData from "./data/bankData.json";
import pensionData from "./data/pensionData.json";
import savingsData from "./data/savingsData.json";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 min-h-screen">
        <div>
          <h1>Net Worth: {}</h1>
        </div>
        <div className="grid grid-cols-4">
          <div>
            <GraphCard title="Investments" chartData={investmentsData} graphColor="#D30000" />
          </div>
          <div>
            <GraphCard title="Bank Balance" chartData={bankData} graphColor="#00cc00" />
          </div>
          <div>
            <GraphCard title="Savings" chartData={savingsData} graphColor="#0062cc"/>
          </div>
          <div>
            <GraphCard title="Pension" chartData={pensionData} graphColor="#FFE135" />
          </div>
        </div>
      </div>
    </div>
  );
}
