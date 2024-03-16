import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch, onError }) => {
  return (
    <Formik
      initialValues={{ userSearch: "" }}
      onSubmit={(values, actions) => {
        const userInput = values.userSearch;
        actions.resetForm();

        userInput.trim() !== ""
          ? onSearch(userInput)
          : onError("Please enter a search query");
      }}
    >
      <Form className={css.searchContainer}>
        <div className={css.searchBox}>
          <button className={css.searchButton} type="submit">
            <IoSearch />
          </button>
          <Field
            className={css.searchField}
            type="input"
            name="userSearch"
            placeholder="Search images and photos"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
