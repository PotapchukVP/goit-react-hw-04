import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ userSearch: "" }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onSearch(values.userSearch);
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
