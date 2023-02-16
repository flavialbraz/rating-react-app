import livroImg from "../assets/images/livro.png"


export function Header () {
    return (
        <div className="rating-header">
        <img src={livroImg} alt="Ilustração de um livro" />
        <h1 className='title-page'>Como foi a ajuda do tutor?</h1>
      </div>
    )
}