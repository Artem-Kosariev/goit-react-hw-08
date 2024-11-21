import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EditModal from "../EditModal/EditModal";
import css from "./Contact.module.css";
import DelModal from "../DelModal/DelModal";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  
  
  const [openModal, setOpenModal] = useState({
    edit: false,
    delete: false,
  });

 
  const toggleModal = (modalType, open) => {
    setOpenModal(prevState => ({
      ...prevState,
      [modalType]: open,
    }));
  };

  return (
    <div className={css.container}>
      <div>
        <p>
          <BsPersonFill className={css.myIcon} size="20" />
          {name}
        </p>
        <p>
          <HiPhone className={css.myIcon} size="20" />
          {number}
        </p>
      </div>
      
      <Stack direction="row">
        <IconButton aria-label="edit" onClick={() => toggleModal('edit', true)}>
          <FaEdit className={css.myIcon} size="20" /> 
        </IconButton>
        <IconButton aria-label="delete" onClick={() => toggleModal('delete', true)}>
          <FaTrashAlt className={css.myIcon} size="20" /> 
        </IconButton>
      </Stack>

      <EditModal
        open={openModal.edit}
        handleClose={() => toggleModal('edit', false)}
        initialValues={{ id, name, number }}
      />
      
      <DelModal
        open={openModal.delete}
        close={() => toggleModal('delete', false)}
        handleDelete={() => {
          dispatch(deleteContact(id));
          toggleModal('delete', false); 
        }}
        contactName={name}
      />
    </div>
  );
}
