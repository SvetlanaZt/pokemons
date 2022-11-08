import PropTypes from 'prop-types';

export default function FilterName ({ value, onChange }) {
  return (<>
    <h2>Search name</h2>
    <input type="text" value={value} onChange={onChange} placeholder="Search"></input>;
  </>
  );
}

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
