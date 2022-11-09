import PropTypes from 'prop-types';
export default function Buttons ({ goToNext, goToPrev }) {
  return (
        <>
            <button type="button" onClick={goToPrev}>Prev</button>
            <button type="button" onClick={goToNext}>Next</button>
        </>
  );
}
Buttons.propTypes = {
  goToNext: PropTypes.func.isRequired,
  goToPrev: PropTypes.func.isRequired,
};
