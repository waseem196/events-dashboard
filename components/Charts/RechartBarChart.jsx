'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const RechartBarChart = ({ chartData }) => {
  const { results } = chartData;

  if (results?.length === 0) {
    return <div className="ml-10"></div>;
  }

  const dataForChart = results.map((elem, i) => {
    return {
      event: i + 1,
      'Expected Audience': elem?.phq_attendance,
    };
  });

  return (
    <div className="flex flex-col overflow-x-auto bg-white rounded-md shadow-sm mx-8">
      <div className="inline-block p-2 pr-6">
        <ResponsiveContainer
          width={
            window.innerWidth < 600 // Adjust the screen width threshold as needed
              ? 290
              : 410
          }
          height={222}
        >
          <BarChart width="100%" height="100%" data={dataForChart}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Expected Audience" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RechartBarChart;
