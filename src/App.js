import './App.css';
import {useState, useEffect} from 'react';
import PokemonCard from './Components/PokemonCard';
import Axios from 'axios';


function App() {

  const [names,setNames] =  useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => setNames(res.data.results))
      .catch(err => console.log(err))
  },[]);

  const getPokemonNames = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(res => setNames(res.results))
      .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <button onClick={getPokemonNames}>Fetch Pokemon</button>

      {
        names.map((f,i) =>{
          return <PokemonCard 
                    name={f}
                    key={i}/>
          })
      }
    </div>
  );
}

export default App;
