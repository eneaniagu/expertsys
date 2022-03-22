import React from "react";
import "./App.css";
import InputForm from "./InputForm.js";
import FinalResult from "./Result.js";

function App() {
  const [showFinal, setShowFinal] = React.useState();
  const [showFinal2, setShowFinal2] = React.useState();
  const handleCallBack = (val) => {
    setShowFinal(val);
  };

  const handleCallBack2 = (val) => {
    console.log("Halo", val);
    setShowFinal2(val);
  };
  return (
    <div className="App">
      {showFinal != true && (
        <InputForm callBack2={handleCallBack2} callBack={handleCallBack} />
      )}
      {showFinal && <FinalResult result={showFinal2} />}
    </div>
  );
}

export default App;
