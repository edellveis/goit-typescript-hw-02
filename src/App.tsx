import { useState, useEffect } from 'react';

import { Bars } from 'react-loader-spinner';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import { fetchImagesByTitle } from './services/api';

import styles from './App.module.css';

type ErrorState = {
  isError: boolean;
  errorMessage: string;
};

type ModalData = { urlRegular: string; altDescr: string };

type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  created_at: string;
  likes: number;
};

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({
    isError: false,
    errorMessage: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    urlRegular: '',
    altDescr: '',
  });

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setError({ ...error, isError: false });
        setLoading(true);
        const response = await fetchImagesByTitle(query, page);
        const data = response.data.results as Image[];
        if (page === 1) {
          setImages(data);
        } else {
          setImages((prevState) => {
            return [...prevState, ...data];
          });
        }
        setTotalPage(response.data.total_pages);
      } catch (error: unknown) {
        setError((prevState) => {
          return {
            ...prevState,
            errorMessage:
              error instanceof Error ? error.message : 'Unknown error',
            isError: true,
          };
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  function onSearchHandler(searchValue: string): void {
    setQuery(searchValue);
    setPage(1);
  }

  function onLoadMoreHandler(): void {
    setPage(page + 1);
  }

  function openModalHandler(): void {
    setModalIsOpen(true);
  }

  function closeModalHandler(): void {
    setModalIsOpen(false);
  }

  function modalDataHandler(data: ModalData): void {
    setModalData(data);
  }

  return (
    <>
      <SearchBar onSearch={onSearchHandler} />
      {error.isError ? (
        <p className={styles.error}>{error.errorMessage}</p>
      ) : (
        <ImageGallery
          images={images}
          onModalData={modalDataHandler}
          onOpenModal={openModalHandler}
        />
      )}
      {loading && (
        <div className={styles.barsWrapper}>
          <Bars
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='bars-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
      )}
      {images.length > 0 && page < totalPage && !error.isError && (
        <LoadMoreBtn onLoadMore={onLoadMoreHandler} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModalHandler}
        modalData={modalData}
      />
    </>
  );
}

export default App;
