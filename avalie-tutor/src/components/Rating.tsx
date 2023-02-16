import { useState } from "react";
import { Button } from "./Button";
import axios from "axios"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


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
      console.log(`MSG DO FRONT: Tutoria avaliada em: ${selectedStar} ${selectedStar === 1 ? 'estrela' : 'estrelas'}`)
 
      axios.post("http://localhost:8000/rating", { stars: selectedStar })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      })

      Swal.fire({
        title: 'Obrigada pela sua avaliação!',
        text: 'É muito importante para nós receber o seu feedback!',
        icon: 'success',
        confirmButtonText: 'Fechar'
      })}

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
