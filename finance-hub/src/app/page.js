"use client";
import GraphCard from "./components/GraphCard";
import investmentsData from "./data/investmentsData.json";
import bankData from "./data/bankData.json";
import pensionData from "./data/pensionData.json";
import savingsData from "./data/savingsData.json";

const allData = [bankData, savingsData, pensionData];
const calcNetWorth = allData.reduce((sum, json) => {
  const last = json[json.length - 1];
  return sum + (last.balance || 0);
}, 0);
const netWorthThousand =
  Math.floor((calcNetWorth + investmentsData[investmentsData.length - 1].balance * 3.49) /
  1000);
const netWorthHundrads =
  (calcNetWorth + investmentsData[investmentsData.length - 1].balance * 3.49) %
  1000;
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md rounded-2xl border-1 border-gray-300 m-10 p-10 mt-20">
          <h1>{`Net Worth: ${netWorthThousand},${Math.round(netWorthHundrads)} ILS`}</h1>
        </div>
        <div className="grid grid-cols-4">
          <div>
            <GraphCard
              title="Investments"
              chartData={investmentsData}
              graphColor="#D30000"
            />
          </div>
          <div>
            <GraphCard
              title="Bank Balance"
              chartData={bankData}
              graphColor="#00cc00"
            />
          </div>
          <div>
            <GraphCard
              title="Savings"
              chartData={savingsData}
              graphColor="#0062cc"
            />
          </div>
          <div>
            <GraphCard
              title="Pension"
              chartData={pensionData}
              graphColor="#FFE135"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
