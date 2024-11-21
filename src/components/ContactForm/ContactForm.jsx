import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import MaskedInput from "react-text-mask";

export default function ContactForm({
  initialValues = { name: "", number: "" },
  handleClose,
}) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      if (initialValues.id) {
        await dispatch(
          editContact({ id: initialValues.id, ...values })
        ).unwrap();
      } else {
        await dispatch(addContact(values)).unwrap();
      }
      toast.success("Successfully saved!");
      if (handleClose) handleClose();
      actions.resetForm(); 
    } catch (error) {
      toast.error("Error, input correct data");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
        "Phone number must be in the format: 123-456-7890"
      )
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage name="name" component="span" className={css.errorMessage} />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <Field
              as={MaskedInput} 
              mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
              className={css.field}
              type="tel"
              name="number"
              id="number"
            />
            <ErrorMessage name="number" component="span" className={css.errorMessage} />
          </div>

          <button
            className={css.btn}
            type="submit"
            disabled={isSubmitting}
          >
            ADD CONTACT
          </button>
        </Form>
      )}
    </Formik>
  );
}
