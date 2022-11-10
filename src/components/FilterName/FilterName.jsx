import PropTypes from 'prop-types';
import { StyledInput } from './FilterName.styled';

export default function FilterName ({ value, onChange }) {
  return (<>
    <StyledInput type="text" value={value} onChange={onChange} placeholder="Search name"></StyledInput>
  </>
  );
}

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
