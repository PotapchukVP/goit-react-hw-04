/* eslint-disable react/prop-types */
import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";

const ImageCard = ({ image, onModal }) => {
  const openModal = () => {
    onModal(image);
  };

  return (
    <li className={css.imageWrapper}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={openModal}
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
    </li>
  );
};

export default ImageCard;
