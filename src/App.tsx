import React from "react";
import Form from "./components/Form";
import logo from "./assets/logos/LunaEdgeLogo.svg";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-black rounded-lg" style={{ padding: "0 30px" }}>
        <img src={logo} alt="Logo" className="w-32 h-20" />
      </div>
      <Form />
    </div>
  );
};

export default App;
