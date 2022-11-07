import HeaderImg from './HeaderImg/HeaderImg';
import FilterName from './FilterName/FilterName';
import Pokemons from './Pokemons/Pokemons';
// import { fetchData } from 'API/API';
import { useState, useEffect } from 'react';

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [setLoad] = useState('');
  const [selectNumberRender] = useState(10);

  const getAllPokemons = async (number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
    const data = await res.json();

    setLoad(data.next);

    function createPokemonObject (results) {
      results.map(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons(prevState => [...prevState, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons(selectNumberRender);
  }, []);
  return (
    <>
    <header>
        <HeaderImg />
        <FilterName />
    </header>
    <main>
        <Pokemons pokemons={allPokemons} />
      </main>
      </>
  );
};
