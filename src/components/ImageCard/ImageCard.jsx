/* eslint-disable react/prop-types */
import css from "./ImageCard.module.css";
import { useState } from "react";
import { FcLike } from "react-icons/fc";

const ImageCard = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <li>
      <div className={css.imageWrapper} onClick={openModal}>
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
        <div className={css.descriptionWrapper}>
          <div className={css.userSpace}>
            <img
              className={css.userAvatar}
              src={image.user?.profile_image?.medium}
            />
            <p className={css.imageText}>{image.user?.name}</p>
          </div>

          <div className={css.likeSpace}>
            <FcLike className={css.likeIcon} />
            <p className={css.imageText}>{image.likes}</p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className={css.modal} onClick={closeModal}>
          <div className={css.modalContent}>
            <img
              className={css.modalImage}
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default ImageCard;
