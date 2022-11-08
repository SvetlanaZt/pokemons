import PropTypes from 'prop-types';

export default function FormControl ({ onClick }) {
  return (
        <>
          <select name="select" onClick={(evt) => onClick(evt.target.value)}>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
</select></>
  );
}
FormControl.propTypes = {
  onClick: PropTypes.func.isRequired,
};
