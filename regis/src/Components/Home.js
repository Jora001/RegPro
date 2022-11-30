import React from "react";

function Home() {
  const  Name = JSON.parse( localStorage.getItem("user"));
  const handleClick = () =>{
    
    window.location.reload()
    
   }
  return (
    <>
    
      <button className="btnbtn" onClick={handleClick}>Logout</button>
     
    </>
  );
}



export default Home;