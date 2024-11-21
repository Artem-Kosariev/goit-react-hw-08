import Modal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import css from "./EditModal.module.css";


Modal.setAppElement("#root");

export default function EditModal({ open, handleClose, initialValues, title }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose} 
      shouldCloseOnEsc={true} 
      contentLabel="Edit Modal"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description" 
      className={css.modalContent} 
      overlayClassName={css.modalOverlay} 
    >
      <div className={css.modalHeader}>
        <h2 id="modal-modal-title" className={css.modalTitle}>
          {title || "Edit Contact"}
        </h2>
      </div>

      <p id="modal-modal-description" className={css.modalDescription}>
        {title ? `Editing contact: ${title}` : "Please edit the contact details below."}
      </p>

      <ContactForm initialValues={initialValues} handleClose={handleClose} />
    </Modal>
  );
}
