import React from "react";
// import nyungwe from "../Assets/images/lakekivu.jfif";
import kivu from "../Assets/images/amateka.jpeg";
import vava from "../Assets/images/kigali.jfif";
import icyza from "../Assets/images/tea.jfif";
import ira from "../Assets/images/kingpalace.jfif";
import bgImage from '../Assets/videos/background-img.mp4'
import kingpalace from "../Assets/images/kingpalace.jfif";
import "./Home.css"

/// import kingpalace from "../Assets/images/kingpalace.jfif";
import "./Home.css"

function Gallery() {
  return (
    <div className="gallery">
  
      <h1 className="gallerytitle"> OUR GALLERY</h1>
      
      <p style={{color:"black",fontSize:"18px",fontWeight:"bold",alignItems:"center"}}>
        Explore the undiscovered ever-changing views of the scenic African
        savannah plains with exceptional activities of mountain gorilla
        trekking, golden monkey tracking, wildlife expeditions, wildebeest
        migration safaris, Rwanda cultural tours, and beautiful scenery
        landscape, picturesque villages, breathtaking volcanoes and countless
        boat trips on your safari holiday!
      </p>
      <div className="video">
      <video autoPlay controls loop muted width="100%" height="auto">
      <source src={bgImage} type="video/mp4"/>
    </video>
        </div>  
     <img className="kivu" src={kivu} alt=""></img> 
      {/* <div class="desc " >KINIGI</div>  */}
      <img className="kivu" src={vava} alt=""></img> 
      <img className="kivu" src={icyza} alt=""></img> 
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img> 
      <img className="kivu" src={icyza} alt=""></img> 
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img>
      <img className="kivu" src={icyza} alt=""></img>
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img>
      <img className="kivu" src={icyza} alt=""></img>
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img>
      <img className="kivu" src={icyza} alt=""></img>
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img>
      <img className="kivu" src={icyza} alt=""></img>
      <img className="kivu" src={ira} alt=""></img>
      <img className="kivu" src={vava} alt=""></img>
      <img className="kivu" src={icyza} alt=""></img> 
      
    </div>
  
  );
}
export default Gallery;