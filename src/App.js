import React, { useEffect, useState } from 'react';
import './App.css'
let list
const arrow = '../next.png'
function App() {

  const [characterName, setCharacterName] = useState('')
  const [characterId, setCharacterId] = useState()
  const [characterIndex, setCharacterIndex] = useState(0)
  const [characterImg, setCharacterImg] = useState('')
  const [characterSpecies, setCharacterSpecies] = useState('')
  const [characterStatus, setCharacterStatus] = useState('')
  const [pageNumber, setPageNumber] = useState(1)


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(data => {
        list = data.results.length - 1
        setCharacterImg(data.results[characterIndex].image)
        setCharacterId(data.results[characterIndex].id)
        setCharacterName(data.results[characterIndex].name)
        setCharacterSpecies(data.results[characterIndex].species)
        setCharacterStatus(data.results[characterIndex].status)
        document.title = `R&M || ${data.results[characterIndex].name}`;
      });
  }, [characterIndex, pageNumber])

  const increasePage = () => {
    if (pageNumber < 42) {
      setPageNumber(pageNumber + 1)
    }
  }
  const decreasePage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    }
  }


  const increase = () => {
    if (characterIndex < list) {
      setCharacterIndex(characterIndex + 1)
    }
  }
  const decrease = () => {
    if (characterIndex > 0) {
      setCharacterIndex(characterIndex - 1)
    }
  }
  return (
    <React.Fragment>

      <div className='card-container'>
        <button type="button" className="button" onClick={decrease}>
          <img className='prev' src="https://img.icons8.com/glyph-neue/64/000000/hand-left.png" />
        </button>
        <div className="card">
          <div className="principal-info">
            <h2 className='character-name' >{characterName}</h2>
            <h2 className='character-id' >ID: {characterId}</h2>
          </div>
          <img className='character-img' src={characterImg} alt="" />
          <p className='my-badge'>{characterSpecies}</p>
          <p className='my-badge'>{characterStatus}</p>
        </div>
        <button type="button" className="button" onClick={increase}>
          <img className='next' src="https://img.icons8.com/glyph-neue/64/000000/hand-left.png" />
        </button>
      </div>
      <div className="buttons-container">
        <button type="button" className="page-button" onClick={decreasePage}>
        <ion-icon name="caret-back-circle-outline"></ion-icon>
        </button>
        <span>Pagina: {pageNumber}</span>
        <button type="button" className="page-button" onClick={increasePage}>
        <ion-icon name="caret-forward-circle-outline"></ion-icon>
        </button>
      </div>
    </React.Fragment >
  );
}

export default App;

