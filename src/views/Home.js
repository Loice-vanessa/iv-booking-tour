import React from "react";
import Nav from "../component/navbar";
import gorilla from "../Assets/images/gorilla.jpeg";
// import gorilla from "../Assets/images/gorilla.jpeg"; 
import lake from "../Assets/images/lake.jpeg";
// import lake from "../Assets/images/lake.jpeg";
import './Home.css'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Footer from "../component/footer";
import HomeLayout from "../component/HomeLayout";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#2990f1',
    }}
  />
);
const Home = () => {
    return( 
      
        <>
         <div className="Home-container">
         
         <div className="Home-content">
        <h1 className="heading-title">RWANDA BOOKING TOUR</h1>
        <div className="carousel-img">
        <Carousel autoplay>
            <img src={gorilla} alt="gorilla"/>
            {/* <img src={gorilla} alt="gorilla"/> */}
            <img src={lake} alt="lake"/>
            {/* <img src={lake} alt="lake"/> */}
     
        </Carousel>
        <Search
      placeholder="search Tour"
      enterButton="Search"
      size="large"
      suffix={suffix}
    
    />
   <h2 className="top-tour"> Top-tour</h2>
    <hr className="align"></hr>
        </div>
        
      
   
    
    </div>
    
         </div>
      
      
    </>
    )

};
export default Home;

