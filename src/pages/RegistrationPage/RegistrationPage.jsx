import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div>
      <h1 className={css.title}>Register your account</h1>
      <RegistrationForm />
    </div>
  );
}