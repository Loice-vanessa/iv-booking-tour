import React from 'react';
import 'antd/dist/antd.css';
import allTours from "../../Assets/data/tours.json"
// import './index.css';
import {  Table} from 'antd';
const columns = [
  {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Name',
    dataIndex: 'description',
  },
  {
    title: 'dueDate',
    dataIndex: 'dueDate',
  },
  {
    title: 'amount',
    dataIndex: 'amount',
  },
  {
    title: 'amount',
    dataIndex: 'seats',
  },
];

const App = () => {
  return <Table columns={columns} dataSource={allTours} />;
}
export default App;