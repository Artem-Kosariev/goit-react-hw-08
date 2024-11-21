import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.NavWraper}>
      <NavLink 
        className={css.link} 
        to="/register"
        aria-label="go to register"
      >
        Register
      </NavLink>
      <NavLink 
        className={css.link} 
        to="/login"

        aria-label="go to exit"
      >
        Log In
      </NavLink>
    </div>
  );
}
