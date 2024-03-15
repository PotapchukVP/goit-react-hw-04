/* eslint-disable react/prop-types */
import css from "./LoadButton.module.css";

const LoadButton = ({ onClick }) => {
  return (
    <div>
      <button className={css.loadButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadButton;
