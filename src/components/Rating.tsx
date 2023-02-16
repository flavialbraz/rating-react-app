import { useState } from "react";
import { Button } from "./Button";

interface RatingProps {
  onStarClick: (star: number) => void,
  isDisabled: boolean
}

export function Rating(props: RatingProps) {
  const [selectedStar, setSelectedStar] = useState(0)

  
  const [starItem, setStarItem] = useState([
    {
      star: 1,
      selected: false,
    },
    {
      star: 2,
      selected: false,
    },
    {
      star: 3,
      selected: false,
    },
    {
      star: 4,
      selected: false,
    },
    {
      star: 5,
      selected: false,
    },
  ])

 

  function handleSelected(item: number) {
    setStarItem((prevStarItem) =>
      prevStarItem.map((star) => {
        if (star.star <= item) {
          return { ...star, selected: true }
        } else {
          return { ...star, selected: false }
        }
      })
    )

    props.onStarClick(item)

    setSelectedStar(item)
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
      ev.preventDefault()
      console.log(`Tutoria avaliada em: ${selectedStar} ${selectedStar === 1 ? 'estrela' : 'estrelas'}`)
  }

  return (
    <div className="stars-container">
         <form onSubmit={handleSubmit}>

      <div className="content-star"> 
        {starItem.map((item, i) => {
          return (
           
            <button
              type="button"
              key={item.star}
              onClick={() => handleSelected(item.star)}
              className={item.selected ? "selected-star" : "star-btn"}
            >
              {item.star}
            </button>
          );
          
        })}

</div>

      <div className="buttons-container">

        <Button className="skip-btn">
          Pular
        </Button>

        <Button 
          type="submit"
          className="confirm-btn" 
          isDisabled={props.isDisabled}>
          Confirmar
        </Button>

      </div>



      </form>
    </div>
  );
}
