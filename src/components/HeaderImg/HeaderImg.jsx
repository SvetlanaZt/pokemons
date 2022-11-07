import imgPokemon from 'img/1_Yx8UKPOkev3JmjFP1O3jow.png';
import imgLogo from 'img/завантаження.png';

export default function HeaderImg () {
  return <div>
    <img src={imgLogo} alt='logo' />
    <img src={imgPokemon} alt='pokemon' height='120px'/>
  </div>;
}
