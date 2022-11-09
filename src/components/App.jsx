import HeaderImg from './HeaderImg/HeaderImg';
import Pokemons from './Pokemons/Pokemons';
import FilterName from './FilterName/FilterName';
import FormControl from './FormControl/FormControl';
import Buttons from './Buttons/Buttons';
import { useState, useEffect } from 'react';

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [selectNumberRender, setSelectNumberRender] = useState(10);
  const [filter, setFilter] = useState('');
  const [dataFilter, setDataFilter] = useState([]);

  const getAllPokemons = async (number) => {
    const res = await fetch(`${pokeUrl}?limit=${number}`);
    const data = await res.json();
    console.log(data);

    setNextPage(data.next);
    setPrevPage(data.previous);

    function createPokemonObject (results) {
      results.map(async (pokemon) => {
        const res = await fetch(`${pokeUrl}/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons(prevState => [...prevState, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons(selectNumberRender);
    setAllPokemons([]);
  }, [selectNumberRender, pokeUrl]);

  useEffect(() => {
    setDataFilter(allPokemons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
  }, [filter, allPokemons]);

  const changeInput = evt => {
    setFilter(evt.currentTarget.value.trim());
  };
  const onClick = evt => {
    setSelectNumberRender(evt);
  };
  const goToNext = () => {
    setPokeUrl(nextPage);
  };
  const goToPrev = () => {
    setPokeUrl(prevPage);
  };

  return (
    <>
    <header>
        <HeaderImg />
        <FilterName value={filter} onChange={changeInput} />
        <FormControl onClick={onClick}/>
    </header>
    <main>
        <Pokemons pokemons={dataFilter} />
        <Buttons goToNext={goToNext} goToPrev={goToPrev} />
      </main>
      </>
  );
};
