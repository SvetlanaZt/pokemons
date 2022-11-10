import PropTypes from 'prop-types';
import { StyledDiv, StyledSelect, StyledP } from './FormControl.styled';

export default function FormControl ({ onClick }) {
  return (
    <StyledDiv>
      <StyledP>Pagination</StyledP>
      <StyledSelect name="select" onClick={evt => onClick(evt.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </StyledSelect>
    </StyledDiv>
  );
}
FormControl.propTypes = {
  onClick: PropTypes.func.isRequired,
};
