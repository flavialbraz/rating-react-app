import { useState } from "react";

interface RatingProps {
  onStarClick: (star: number) => void;
}
 

export function Rating(props: RatingProps) {
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
  ]);

  function handleSelected(item: number) {
    setStarItem((prevStarItem) =>
      prevStarItem.map((star) => {
        if (star.star <= item) {
          return { ...star, selected: true };
        } else {
          return { ...star, selected: false };
        }
      })
    );

    props.onStarClick(item);

    console.log(`Tutoria avaliada em: ${item} estrelas`)
  }

  return (
    <div className="stars-container">
      
      {starItem.map((item, i) => {
        return (
          <button
            key={item.star}
            onClick={() => handleSelected(item.star)}
            className={item.selected ? "selected-star" : "star-btn"}
          >
            {item.star}
          </button>
        );
      })}
      
    </div>
  );
}
