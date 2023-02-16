import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Rating } from "./components/Rating";
import { Button } from "./components/Button";

function App() {
  const [isDisabled, setIsDisabled] = useState(true)

  function handleStarClick(star: number) {
    setIsDisabled(false)
  }

  return (
 
      <div className="rating-page">

        <Header />
        <Rating 
          onStarClick={handleStarClick} 
          isDisabled={isDisabled} 
        />

        
      </div>

       
  );
}

export default App;
