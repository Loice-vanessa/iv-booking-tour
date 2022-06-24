// import React from "react";
// import "./charts.css";
// const chart=()=>{
//     return(
//         <div className="charts">charts</div>

//     )
// }
// export default chart;


 import React from "react";
 import "./charts.css"
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'kinigi',
    tour: 590,
    income: 800,
    amount: 1400,
    point: 490,
  },
  {
    name: 'mt kalisimbi',
    tour: 868,
    income: 967,
    amount: 250,
    point: 590,
  },
  {
    name: 'king palace',
    tour: 1397,
    income: 1098,
    amount: 989,
    point: 350,
  },
  {
    name: 'Nyungwe park',
    tour: 1480,
    income: 1200,
    amount: 1228,
    point: 480,
  },
  {
    name: 'Akagera park',
    tour: 1520,
    income: 1108,
    amount: 1100,
    point: 460,
  },
  {
    name: 'lake kivu',
    tour: 1400,
    income: 680,
    amount: 1700,
    point: 380,
  },
];


const Charts =()=>{

    return (
      <div className="chart">
        <div className="title">Last 6 months (REVENUE)</div>
        <ResponsiveContainer width="50%" aspect={1.5/1}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amount" fill="#8884d" stroke="#8884d8" />
          <Bar dataKey="tour" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="income" stroke="#ff7300" />
          <Scatter dataKey="point" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
        
       
        
    )
};
export default  Charts;





