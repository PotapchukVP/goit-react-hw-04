/* eslint-disable react/prop-types */
import css from "./ImageModal.module.css";

const ImageModal = ({ image, onModal }) => {
  if (!image || !image.urls || !image.urls.regular) {
    return null;
  }
  return (
    <div className={css.modal} onClick={() => onModal(false)}>
      <div className={css.modalContent}>
        <img
          className={css.modalImage}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    </div>
  );
};

export default ImageModal;
