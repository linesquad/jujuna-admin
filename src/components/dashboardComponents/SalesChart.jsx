import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

function SalesChart() {
  const data = [
    { name: "Jan", unitsSold: 45, totalTransaction: 2400 },
    { name: "Fab", unitsSold: 60, totalTransaction: 2210 },
    { name: "Mar", unitsSold: 100, totalTransaction: 2290 },
    { name: "Apr", unitsSold: 66, totalTransaction: 2000 },
    { name: "May", unitsSold: 78, totalTransaction: 2181 },
    { name: "Jun", unitsSold: 22, totalTransaction: 2500 },
  ];

  return (
    <div className="w-full bg-[#fff] rounded-[15px] h-[350px] border-[3px] border-purple-300">
      <BarChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="unitsSold" fill="#1c7ed6" />
        <Bar yAxisId="right" dataKey="totalTransaction" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default SalesChart;
