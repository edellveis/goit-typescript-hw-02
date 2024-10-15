import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");
export default function imageModal({ imageUrl, onRequestClose, isOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          background: "none",
          border: "none",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <img src={imageUrl} className={style.img} />
    </Modal>
  );
}
