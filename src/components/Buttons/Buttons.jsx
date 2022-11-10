import PropTypes from 'prop-types';
import { StyledButton, StyledDiv } from './Button.styled';
export default function Buttons ({ goToNext, goToPrev }) {
  return (
        <StyledDiv>
            <StyledButton type="button" onClick={goToPrev}>Prev</StyledButton>
            <StyledButton type="button" onClick={goToNext}>Next</StyledButton>
        </StyledDiv>
  );
}
Buttons.propTypes = {
  goToNext: PropTypes.func.isRequired,
  goToPrev: PropTypes.func.isRequired,
};
