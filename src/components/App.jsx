import HeaderImg from './HeaderImg/HeaderImg';
import Pokemons from './Pokemons/Pokemons';
import FilterName from './FilterName/FilterName';
import FormControl from './FormControl/FormControl';
import Buttons from './Buttons/Buttons';
import FilterTypes from './FilterTypes/FilterTypes';
import { useState, useEffect } from 'react';
import { StyledDiv, StyledHeader } from './App.styled';

export const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [selectNumberRender, setSelectNumberRender] = useState(10);
  const [filterName, setFilterName] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [dataFilter, setDataFilter] = useState([]);

  const getAllPokemons = async (number) => {
    const res = await fetch(`${pokeUrl}?limit=${number}`);
    const data = await res.json();

    setNextPage(data.next);
    setPrevPage(data.previous);

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
    setAllPokemons([]);
  }, [selectNumberRender, pokeUrl]);

  const filterTypes = filterType === 'all' ? allPokemons : allPokemons.filter(item => item.types[0].type.name === filterType);
  const filterNameTag = filterTypes.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));

  useEffect(() => {
    setDataFilter(filterNameTag);
  }, [filterName, allPokemons, filterType]);

  const changeInput = evt => {
    setFilterName(evt.currentTarget.value.trim());
  };
  const onClickPagination = evt => {
    setSelectNumberRender(evt);
  };
  const onClickType = (evt) => {
    setFilterType(evt);
  };
  const goToNext = () => {
    setPokeUrl(nextPage);
  };
  const goToPrev = () => {
    setPokeUrl(prevPage);
  };
  return (
    <>
    <StyledHeader>
        <HeaderImg />
        <FilterName value={filterName} onChange={changeInput} />
        <StyledDiv>
        <FormControl onChange={onClickPagination} />
        <FilterTypes onChange={onClickType} />
        </StyledDiv>
    </StyledHeader>
    <main>
        <Pokemons pokemons={dataFilter} />
        <Buttons goToNext={goToNext} goToPrev={goToPrev} prevPage={prevPage} />
      </main>
      </>
  );
};
