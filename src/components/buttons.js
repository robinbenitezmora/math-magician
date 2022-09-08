import PropTypes from 'prop-types';

const Button = ({ character, classButton, eventFunction }) => {
  <button type="button" className={classButton} onClick={() => eventFunction(character)}>
    {character}
  </button>;
};

const addData = () => {};

Button.propTypes = {
  character: PropTypes.string,
  classButton: PropTypes.string,
  eventFunction: PropTypes.func,
};

Button.defaultProps = {
  character: '?',
  classButton: 'btn',
  eventFunction: addData,
};

export default Button;
