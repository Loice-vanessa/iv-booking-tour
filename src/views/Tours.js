import React,{ useState} from "react";

import { Card, Image, Space, Typography, button, Drawer } from "antd";
import allTours from "../Assets/data/tours.json"
import SingleTour from "../component/SingleTour";
// import gorilla from "../Assets/images/gorilla.jpeg"; 
// import lake from "../Assets/images/lake.jpeg";

const { Text, Title } = Typography;
const Tours = () => {
  const[selectedTour,setSelectedTour]=useState()
  const[ShowDrawer,setShowDrawer]=useState(false)
  return (
    <>
    <div style={{ widith: "100%", height: "auto", padding: "10px 100px" }}>
      <Card style={{justifyContent:"space-between",background:"darkgolden"}}>
        {/* <Title>choose your tour</Title> */}
        {
        allTours.map((tour)=>(
            <Card.Grid className="tour-card-grid">
          <Space direction="vertical">
            <img  src={tour.photo} />
            <Title level={4} style={{ color: "darkgoldenrod" }}>
              {tour.title.toUpperCase()}
            </Title>

            <Text type="secondary" italic>
            {tour.description}
            </Text>
            <Space>
              <Text> Due Date</Text>
              <Text strong>{tour.dueDate}12-02-2022 10h00 am</Text>
            </Space>
  <button onClick={()=>{setSelectedTour(tour)
              setShowDrawer(true)}}>Book Now!</button>
          </Space>
        </Card.Grid>))}
      </Card>
    </div>
    
    <Drawer 
    title="single Tour!" 
    placement="right" 
    onClose={()=>{setShowDrawer(false)}}  
    visible={ShowDrawer}>
    <SingleTour data={selectedTour}></SingleTour>
    </Drawer>
    </>
  );
};
export default Tours;
