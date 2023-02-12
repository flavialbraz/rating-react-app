import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Rating } from "./components/Rating";

function App() {
  
  const [isDisabled, setIsDisabled] = useState(true);

  function handleStarClick(star: number) {
    setIsDisabled(false);
  }

  return (
    <div className="container">
      <div className="rating-page">
        <Header />
        <Rating onStarClick={handleStarClick} />
      </div>

      <div className="buttons-container">
        <button className="skip-btn"> Pular </button>

        <button className="confirm-btn" 
        disabled={isDisabled}>
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default App;
