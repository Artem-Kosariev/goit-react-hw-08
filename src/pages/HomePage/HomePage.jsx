import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the Phonebook</h1>
      <p className={css.text}>
          This is your personal space to store and manage your contacts.
        Add, search, and organize your contacts easily.
      </p>
    </div>
  );
}