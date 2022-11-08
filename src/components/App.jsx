import HeaderImg from './HeaderImg/HeaderImg';
import Pokemons from './Pokemons/Pokemons';
import FilterName from './FilterName/FilterName';
import { useState, useEffect } from 'react';

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [setLoad] = useState('');
  const [selectNumberRender] = useState(20);
  const [filter, setFilter] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  const getAllPokemons = async (number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
    const data = await res.json();
    console.log(data);

    setLoad(data.next);

    function createPokemonObject (results) {
      // console.log(results)
      results.map(async (pokemon) => {
        // console.log(pokemon)
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

  useEffect(() => {
    setDataFilter(allPokemons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
  }, [filter, allPokemons]);

  const changeInput = evt => {
    setFilter(evt.currentTarget.value.trim());
  };
  // const fhfh = allPokemons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
    <header>
        <HeaderImg />
        <FilterName value={filter} onChange={changeInput} />
    </header>
    <main>
        <Pokemons pokemons={dataFilter} />
      </main>
      </>
  );
};
