import ImageCard from '../ImageCard/ImageCard';

import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  created_at: string;
  likes: number;
}

interface ImageGalleryProps {
  images: Image[];
  onModalData: (data: { urlRegular: string; altDescr: string }) => void;
  onOpenModal: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onModalData,
  onOpenModal,
}) => {
  return (
    <ul className={styles.galleryList}>
      {images.length > 0 &&
        images.map((image) => (
          <ImageCard
            key={image.id}
            onModalData={onModalData}
            onOpenModal={onOpenModal}
            altDescr={image.alt_description}
            urlSmall={image.urls.small}
            urlRegular={image.urls.regular}
            dateCreated={image.created_at}
            like={image.likes}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;