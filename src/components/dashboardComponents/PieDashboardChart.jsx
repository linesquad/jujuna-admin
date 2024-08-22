import { PieChart, Pie, Cell } from "recharts";

function PieDashboardChart() {
  const data = [
    { name: "text1", value: 200, color: "#265599" },
    { name: "text2", value: 300, color: "#576EB2" },
    { name: "text3", value: 400, color: "#F68121" },
    { name: "text4", value: 500, color: "#63A6B9" },
  ];

  return (
    <div className="py-[20px] pl-[20px] pr-[50px] w-[450px] h-[350px] bg-[#fff] flex items-center gap-[4px] rounded-[15px] border-[3px] border-purple-300">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col gap-[20px]">
        {data.map((item, index) => {
          return (
            <div className="flex items-center gap-[21px]" key={index}>
              <div
                className={`w-[41px] h-[41px] rounded-[15px]`}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="text-[24px]">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PieDashboardChart;
