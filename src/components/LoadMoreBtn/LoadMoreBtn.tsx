import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={styles.LoadMoreBtn} type='button' onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
