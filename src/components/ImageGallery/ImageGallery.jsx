/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ images, onModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onModal={onModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
