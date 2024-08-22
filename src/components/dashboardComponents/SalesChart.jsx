import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

function SalesChart() {
  const data = [
    { name: "Jan", pv: 45, amt: 2400 },
    { name: "Fab", pv: 60, amt: 2210 },
    { name: "Mar", pv: 100, amt: 2290 },
    { name: "Apr", pv: 66, amt: 2000 },
    { name: "May", pv: 78, amt: 2181 },
    { name: "Jun", pv: 22, amt: 2500 },
  ];

  return (
    <div className="w-full bg-[#fff] rounded-[15px] w-[450px] h-[350px]">
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
        <Bar yAxisId="left" dataKey="pv" fill="#1c7ed6" />
        <Bar yAxisId="right" dataKey="amt" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default SalesChart;
