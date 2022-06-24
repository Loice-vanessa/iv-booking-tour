import React from "react";

const SingleTrip = ({ data }) => {
  return (
  
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          flexDirection: "column",
          heigh: "100vh",
          width:"100%",
          background:"fht"
          
        }}

      >
        <img src={data?.Profile} style={{width:"90%",height:"20%"}} />
        <h2 style={{color:"black"}}>{data?.Name}</h2>
        <h3 >{data?.Email}</h3>
        <h3>{data?.Home}</h3>
        <h3>{data?.Phone}</h3>
      </div>
   
  );
};
export default SingleTrip;