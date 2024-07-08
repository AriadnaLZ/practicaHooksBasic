
import { useEffect, useState } from 'react'
import './App.css'
import Personaje from './components/Personaje/Personaje'


function App() {
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => setPersonajes(res.results))
  }, [])

  return (
    <>
    <div className='app'>
      {personajes.map((personaje) => <Personaje personaje={personaje}/>)}
      </div>
    </>

  )
}

export default App
