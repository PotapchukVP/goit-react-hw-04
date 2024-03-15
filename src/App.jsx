import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadButton from "./components/LoadButton/LoadButton.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
    setTotalPage(0);
    setKey(Date.now());
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {error && <ErrorMessage error={error} />}
      {search && (
        <ImageGallery
          key={key}
          search={search}
          currentPage={currentPage}
          onTotalPage={setTotalPage}
          onLoading={setIsLoading}
          onError={setError}
        />
      )}
      {isLoading && <Loader />}
      {currentPage < totalPage && (
        <LoadButton
          onClick={() => {
            setCurrentPage((prevPage) => prevPage + 1);
          }}
        />
      )}
    </>
  );
}

export default App;
