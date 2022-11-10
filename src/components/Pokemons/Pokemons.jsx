import PropTypes from 'prop-types';
import { StyledUl, StyledLi, StyledName, StyledImg, StyledTypeStats } from './Pokemons.styled'

export default function Pokemons ({ pokemons }) {
  return (<StyledUl>
        {pokemons.map(item => (
          <StyledLi key={item.id}>
            <StyledName>{item.name}</StyledName>
            <StyledImg src={item.sprites.other.dream_world.front_default} alt={item.name}></StyledImg>
            <StyledTypeStats>Type: {item.types[0].type.name}</StyledTypeStats>
            <StyledTypeStats>Stats: {item.stats[0].base_stat}</StyledTypeStats>
          </StyledLi>
        ))}
        </StyledUl>);
}

Pokemons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.objectOf(PropTypes.objectOf).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number,
      })),
  }).isRequired),
};
