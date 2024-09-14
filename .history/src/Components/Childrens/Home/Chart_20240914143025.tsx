// src/components/SalesMountainChart.js

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 1700 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 3000 },
  { name: 'Apr', value: 5000 },
  { name: 'May', value: 2300 },
  { name: 'Jun', value: 4200 },
  { name: 'Jul', value: 5806 },
  { name: 'Aug', value: 2367 },
  { name: 'Sep', value: 25563 },
  { name: 'Oct', value: 41285 },
  { name: 'Nov', value: 26974 },
  { name: 'Dec', value: 42368 },
];

const SalesMountainChart = () => {
  return (
    <ResponsiveContainer className={"w-full bg-red-500">
      <LineChart data={data}  >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 8 }}
          isAnimationActive={false}
        />
        <Line
          type="linear"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={0.4}
          fill="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesMountainChart;
