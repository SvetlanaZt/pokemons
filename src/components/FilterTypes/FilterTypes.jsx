import PropTypes from 'prop-types';
import { StyledDiv, StyledSelect, StyledP } from '../FormControl/FormControl.styled';

export default function FilterTypes ({ onChange }) {
  return (
  <StyledDiv><StyledP>Choose Type</StyledP>
  <StyledSelect name="select" onChange={(evt) => onChange(evt.target.value)}>
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
  onChange: PropTypes.func.isRequired,
};
