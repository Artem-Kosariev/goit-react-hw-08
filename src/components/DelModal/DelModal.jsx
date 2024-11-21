import ReactModal from "react-modal";
import Button from "@mui/material/Button";
import css from "./DelModal.module.css";


ReactModal.setAppElement("#root");

export default function DelModal({ open, close, handleDelete, contactName }) {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={close}
      contentLabel="Delete Contact"
      className={css.modalContent} 
      overlayClassName={css.modalOverlay} 
    >
      <h2 className={css.modalTitle}>Delete Contact?</h2>
      <p className={css.modalDescription}>
        Are you sure you want to delete {contactName}?
      </p>
      <div className={css.modalActions}>
        <Button onClick={close} color="secondary">No</Button>
        <Button onClick={handleDelete} color="primary">Yes</Button>
      </div>
    </ReactModal>
  );
}
