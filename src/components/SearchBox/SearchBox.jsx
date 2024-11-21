import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));  
  };

  return (
       <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={search} 
        onChange={onFilterChange}  
        placeholder="Search..."
      />
    </div>
  );
}
