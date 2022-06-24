import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../views/Home';
import AboutUs from "../views/About"
import Tours from "../views/Tours";
// import SignUp from "../views/Signup";
import Contactus from "../views/ContactUs";
import Galley from "../views/Gallery";
import HomeLayout from '../component/HomeLayout';
import Register from '../component/register';
import DashLayout from "../component/DashLayout";
// import App from '../views/admin/alltours';

import ManagerUsers from "../views/admin/Managerusers";
import ManagerTrips from "../views/admin/managetrips";
import Dashboard from "../views/admin/dashboard";
import { PieChart } from 'recharts';


const Index=() =>{
    return (
        <>
       
        <HomeLayout>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route> 
            <Route exact path="/home" element={<Home/>}></Route> 
            <Route exact path="/aboutus" element={<AboutUs/>}></Route>
            {/* <Route exact path="/signUp" element={<SignUp/>}></Route> */}
            <Route path="/register" element={<Register/>}/>          
            <Route exact path="/contactUs" element={<Contactus/>}></Route>
            <Route exact path="/Gallery" element={<Galley/>}></Route>  
            <Route path="/tours" element={<Tours/>}/>          
        </Routes>
            <Routes>
                <Route exact path="/users" element={<ManagerUsers/>}></Route>
          <Route exact path="/trips" element={<ManagerTrips/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </HomeLayout>
       
        </>
    );
};
export default Index;