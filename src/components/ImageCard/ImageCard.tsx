import styles from './ImageCard.module.css';

interface ImageCardProps {
  altDescr: string;
  urlSmall: string;
  urlRegular: string;
  dateCreated: string;
  like: number;
  onModalData: (data: { urlRegular: string; altDescr: string }) => void;
  onOpenModal: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  altDescr,
  urlSmall,
  urlRegular,
  dateCreated,
  like,
  onModalData,
  onOpenModal,
}) => {
  const date = new Date(dateCreated);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  function onClickHandler(): void {
    onModalData({ urlRegular, altDescr });
    onOpenModal();
  }

  return (
    <li className={styles.item} onClick={onClickHandler}>
      <img className={styles.img} src={urlSmall} alt={altDescr} />
      <div className={styles.wrapper}>
        <p>📅 {`${day}.${month}.${year}`}</p>
        <p>❤ {like}</p>
      </div>
    </li>
  );
};

export default ImageCard;
