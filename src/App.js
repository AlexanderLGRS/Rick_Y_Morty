import React, { useEffect, useState } from 'react';
import './App.css'
let list
const arrow = '../next.png'
function App() {

  const [characterName, setCharacterName] = useState('')
  const [characterIndex, setCharacterIndex] = useState(0)
  const [characterImg, setCharacterImg] = useState('')
  const [characterStatus, setCharacterStatus] = useState('')
  const [characterSpecies, setCharacterSpecies] = useState('')


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=19',
    )
      .then(response => response.json())
      .then(data => {
        list = data.results.length - 1
        console.log(characterIndex);
        setCharacterImg(data.results[characterIndex].image)
        setCharacterName(data.results[characterIndex].name)
        setCharacterSpecies(data.results[characterIndex].species)
        setCharacterStatus(data.results[characterIndex].status)
        document.title = `R&M || ${data.results[characterIndex].name}`;
      });
  }, [characterIndex])

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
      <div className="buttons-container">
        <button type="button" class="boton btn btn-primary" onClick={decrease}>
        <img className='prev' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-left-arrow-miscellaneous-kiranshastry-solid-kiranshastry.png"/>
        </button>
        <button type="button" class="boton btn btn-primary" onClick={increase}>
        <img className='next' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-left-arrow-miscellaneous-kiranshastry-solid-kiranshastry.png"/>
        </button>
      </div>
      <div className="card">
        <h2 className='character-name' >{characterName}</h2>
        <img className='character-img' src={characterImg} alt="" />
        <p className='badge bg-success text-dark'>{characterSpecies}</p>
        <p className='badge bg-warning text-dark'>{characterStatus}</p>
      </div>
    </React.Fragment >
  );
}

export default App;

