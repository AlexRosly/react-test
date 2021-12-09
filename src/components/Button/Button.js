import PropTypes from "prop-types";
import css from "./Button.module.css";

export const Button = ({ onClick, onMouseLeave, onMouseOver }) => {
  return (
    <>
      <button
        className={css.button}
        type="button"
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
      >
        Удалить объект
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  onMouseLeav: PropTypes.func,
  onMouseOver: PropTypes.func,
};
