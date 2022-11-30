import React from "react";

function Home() {
  const  Name = JSON.parse( localStorage.getItem("user"));
  return (
    <>
    <p className="text-center">Welcome - {Name}.name</p>
      <h1>Login Successfully</h1>
      <div>HELLO WORLD</div>
      <h1>HELLO ARMENIA</h1>

     

    </>
  );
}



export default Home;