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
import DashboardLayout from "../component/DashboardLayout";
import allTours from "../views/dashboard/alltours"
import App from '../views/dashboard/alltours';
import NewTour from '../views/dashboard/createTour';

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
         <DashboardLayout>
            <Routes>
                <Route exact path="/Admin" element={<App/>}/>
                <Route exact path="/Admindashboard" element={<NewTour/>}/>
            </Routes>
        </DashboardLayout>
        </HomeLayout>
       
        </>
    );
};
export default Index;