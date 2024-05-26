import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TitleDesc from "./components/TitleDesc";
import Code from "./components/Code";
import Console from "./components/Console";
import LogLevelDisplay from "./components/LogLevelDisplay";
import Footer from "./components/Footer";
import AddToYourCode from "./components/AddToYourCode";

function App() {
  const [logLevel, setLogLevel] = useState("generic");

  const handleLogLevelChange = (newLogLevel) => {
    setLogLevel(newLogLevel);
  };

  return (
    <div>
      <Header />
      <div className="app-content">
        <TitleDesc />
        <AddToYourCode />
        <LogLevelDisplay onLogLevelChange={handleLogLevelChange} />
        <Code type={logLevel} />
        <Console type={logLevel} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
