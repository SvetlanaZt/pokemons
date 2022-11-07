import PropTypes from 'prop-types';

export default function Pokemons ({ pokemons }) {
  return (<ul>
        {pokemons.map(item => (
          <li key={item.name}>
            <p>{item.name}</p>
            <img src={item.sprites.other.dream_world.front_default} alt={item.name}></img>
            <p>Type: {item.types[0].type.name}</p>
          </li>
        ))}
        </ul>);
}

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
