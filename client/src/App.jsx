import React from "react";
import { Navbar, Welcome, Transactions } from "./components/index";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>

      <Transactions></Transactions>
    </div>
  );
};

export default App;
