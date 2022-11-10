import PropTypes from 'prop-types';
import { StyledDiv, StyledSelect, StyledP } from '../FormControl/FormControl.styled';

export default function FilterTypes ({ onClick }) {
  return (
  <StyledDiv><StyledP>Choose Type</StyledP>
  <StyledSelect name="select" onClick={(evt) => onClick(evt.target.value)}>
  <option value="all">all</option>
  <option value="water">water</option>
  <option value="grass">grass</option>
  <option value="fire">fire</option>
  <option value="bug">bug</option>
  <option value="normal">normal</option>
</StyledSelect></StyledDiv>
  );
}
FilterTypes.propTypes = {
  onClick: PropTypes.func.isRequired,
};
