import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>Welcome to my React application.</p>
      <Card Title="Luffy" Description="Captain of the Straw Hat Pirates" />
      <Footer/>

      
    </>
  );
}

export default App;
