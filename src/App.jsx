import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LaodMoreBtn";
import ImageModal from "./components/imageModal/imageModal";
import React, { useState } from "react";
import axios from "axios";

export default function () {
  const [dataImg, setDataImg] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadmore, setLoadmore] = useState(false);

  const [page, setPage] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [SelectedImg, setSelectedImg] = useState(null);

  const accessKey = "ntaDh4XvlCZd5IIEV3dEPosC-Z1FD8sfmnLO8TiV6-E";
  const getPhoto = async (value) => {
    try {
      setLoading(true);
      setLoadmore(true);
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${value}&client_id=${accessKey}&page=${page}`
      );
      if (page === 1) {
        setDataImg(data.results);
      } else {
        setDataImg((prevPhotos) => [...prevPhotos, ...data.results]);
      }
      setLoadmore(page < data.total_pages);
    } catch (error) {
      setLoadmore(false);
      console.log(error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getPhoto(searchTerm);
  };
  const onSubmit = (value) => {
    setSearchTerm(value);
    setPage(1);
    setDataImg([]);
    getPhoto(value);
  };
  const openModal = (imageUrl) => {
    setSelectedImg(imageUrl);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImg(null);
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery dataImg={dataImg} openModal={openModal} />
      {error && <ErrorMessage error={error} />}
      {loading && <Loader />}
      {loadmore && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={SelectedImg}
      />
    </div>
  );
}
