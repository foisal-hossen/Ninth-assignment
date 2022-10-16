import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const loadedData = useLoaderData().data;

  const name = loadedData.name;
  const total = loadedData.total;

  return (
    <div className=" ">
      <h1 className="text-4xl font-bold bg-violet-600 text-white p-5 pb-8">
        STATISTICS
      </h1>
      <div className="mt-8 ">
        <ResponsiveContainer width="80%" height={200}>
          <BarChart width={150} height={40} data={loadedData}>
            <XAxis dataKey= {name} />
            <YAxis />
            <Tooltip />
            <Bar dataKey= {total} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
