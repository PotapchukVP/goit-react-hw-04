import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export const ImageGallery = ({
  search,
  lastSearch,
  currentPage,
  onTotalPage,
}) => {
  const [images, setImages] = useState([]);

  const baseUrl = "https://api.unsplash.com/";
  const apiKey = "Qv3hTiES_dzsKMG6EM2JzPNsaVnqwRG2RGcguPcE3gs";

  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Client-ID ${apiKey}` },
  });

  useEffect(() => {
    console.log("Querry search!");
    const fetchImages = async () => {
      try {
        const response = await instance.get("search/photos", {
          params: { page: currentPage, per_page: 12, query: search },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        // setImages(response.data.results);
        onTotalPage(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    if (search !== lastSearch) {
      setImages([]);
      onTotalPage(0);
      fetchImages();
      return;
    }

    fetchImages();
  }, [search, currentPage]);

  return (
    <div className={css.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};
