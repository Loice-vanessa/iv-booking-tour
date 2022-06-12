import React from "react";
// import nyungwe from "../Assets/images/lakekivu.jfif";
import kivu from "../Assets/images/gorilla.jpeg";
import vava from "../Assets/images/gorilla.jpeg";
import icyza from "../Assets/images/gorilla.jpeg";
import ira from "../Assets/images/gorilla.jpeg";

/// import kingpalace from "../Assets/images/kingpalace.jfif";
import "./Home.css"

function Gallery() {
  return (
    <div className="gallery">
      <p style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
        travel tours Gallery
      </p>
     <img className="kivu" src={kivu} alt=""></img> 
      {/* <div class="desc " >KINIGI</div>  */}
      <img className="kivu" src={vava} alt=""></img> 
      <img className="kivu" src={icyza} alt=""></img> 
      <img className="kivu" src={ira} alt=""></img>
      <p style={{color:"black",fontSize:"18px",fontWeight:"bold"}}>
        Explore the undiscovered ever-changing views of the scenic African
        savannah plains with exceptional activities of mountain gorilla
        trekking, golden monkey tracking, wildlife expeditions, wildebeest
        migration safaris, Rwanda cultural tours, and beautiful scenery
        landscape, picturesque villages, breathtaking volcanoes and countless
        boat trips on your safari holiday!
      </p>
    </div>
  );
}
export default Gallery;