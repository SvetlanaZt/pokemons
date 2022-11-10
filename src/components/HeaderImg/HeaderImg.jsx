import imgPokemon from 'img/1_Yx8UKPOkev3JmjFP1O3jow.png';
import { StyledH1, StyledDiv, StyledImg } from './HeaderImg.styled';

export default function HeaderImg () {
  return <StyledDiv>
    <StyledH1>Poke API</StyledH1>
    <StyledImg src={imgPokemon} alt='pokemon' height='120px'/>
  </StyledDiv>;
}
