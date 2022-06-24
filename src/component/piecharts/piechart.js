 
//  import Reacte from 'react'
 import React,{ PureComponent } from 'react';
 
//  import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Card} from 'antd';
import DashLayout from "../DashLayout";

 const data = [
   {
     name: 'Nyungwe Park',
 uv: 4000,
 pv: 2400,
 amt: 2400,
 },
   {
       name: 'Akagera',
   uv: 3000,
   pv: 1398,
   amt: 2210,
  },
  {
   name: 'Gishwati',
   uv: 2000,
   pv: 9800,
  amt: 2290,
   },
   {
   name: 'Lake Kivu',
     uv: 2780,
    pv: 3908,
    amt: 2000,
  },
   {
     name: 'Kigali City',
    uv: 1890,
     pv: 4800,
    amt: 2181,
  },
   {
     name: 'Muhazi Lake',
    uv: 2390,
    pv: 3800,
    amt: 2500,
 },
  {
    name: 'Goma',
    uv: 3490,
    pv: 4300,
     amt: 2100,
   },
 ];



 const Piechart =()=>
{
  return(
    <DashLayout>

      

  <Card>
  <Card.Grid style={{width:"30%",height:"250px"}} className="container">
        
      </Card.Grid>
 
    
  <Card.Grid style={{width:"30%",height:"250px"}} className="container">
         <Piechart/>
        
      </Card.Grid>
 <Card.Grid style={{width:"80%",height:"20rem"}} className="container-card">
<ResponsiveContainer width="100%" height="100%">
{/* <Piechart/> */}
        <AreaChart
           width={500}
          height={400}
        data={data}
        margin={{
          top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
         >
           <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
         <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          
         </AreaChart>
       
       </ResponsiveContainer>
      </Card.Grid>

      
     </Card>
       </DashLayout>


  )
 }
 export default Piechart;