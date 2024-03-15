/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = ({
  search,
  currentPage,
  onTotalPage,
  onLoading,
  onError,
}) => {
  const [images, setImages] = useState([]);

  const baseUrl = "https://api.unsplash.com/";
  const apiKey = "Qv3hTiES_dzsKMG6EM2JzPNsaVnqwRG2RGcguPcE3gs";

  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Client-ID ${apiKey}` },
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        onLoading(true);
        onError(null);

        const response = await instance.get("search/photos", {
          params: { page: currentPage, per_page: 12, query: search },
        });
        if (response.data.results.length === 0) {
          onLoading(false);
          onError("Sorry but there is nothing to load for your query");
          return;
        }
        setImages((prevImages) =>
          currentPage === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );

        onTotalPage(response.data.total_pages);
      } catch (error) {
        onError(error);
      } finally {
        onLoading(false);
      }
    };

    fetchImages();
  }, [search, currentPage]);

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
