import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from 'yup'; 
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters and contain numbers and letters ").required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration is successful!");
        actions.resetForm();
      })
      .catch((error) => {
        console.error("Registration error:", error);
   
        const errorMessage = error?.message || "Error, please input correct email and password";
        toast.error(errorMessage);
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" />
            {errors.name && touched.name && <div className={css.error}>{errors.name}</div>}
          </label>
          
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
            {errors.email && touched.email && <div className={css.error}>{errors.email}</div>}
          </label>
          
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
            {errors.password && touched.password && <div className={css.error}>{errors.password}</div>}
          </label>
          
          <button className={css.regBtn} type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
