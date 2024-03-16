import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadButton from "./components/LoadButton/LoadButton.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({});
  const [images, setImages] = useState([]);

  const baseUrl = "https://api.unsplash.com/";
  const apiKey = "Qv3hTiES_dzsKMG6EM2JzPNsaVnqwRG2RGcguPcE3gs";
  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Client-ID ${apiKey}` },
  });

  useEffect(() => {
    if (search === "") return;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await instance.get("search/photos", {
          params: { page: currentPage, per_page: 12, query: search },
        });
        if (response.data.results.length === 0) {
          setSearch("");
          setIsLoading(false);
          setError("Sorry but there are no results for your query");
          return;
        }

        setImages((prevImages) =>
          currentPage === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );

        setTotalPage(response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [search, currentPage]);

  const handleSearch = (value) => {
    setCurrentPage(1);
    setTotalPage(0);
    setKey(Date.now());
    setError(null);
    setSearch(value);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onError={setError}></SearchBar>
      {error && <ErrorMessage error={error} />}
      {search && <ImageGallery key={key} images={images} onModal={setModal} />}
      {isLoading && <Loader />}
      {currentPage < totalPage && (
        <LoadButton
          onClick={() => {
            setCurrentPage((prevPage) => prevPage + 1);
          }}
        />
      )}
      {modal && <ImageModal image={modal} onModal={setModal}></ImageModal>}
    </>
  );
}

export default App;
