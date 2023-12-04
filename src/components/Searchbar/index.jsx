import { useState } from "react";
import React from "react";

import Search from "../../assets/icons/Search";
import DeleteBtn from "../../assets/icons/DeleteBtn";

import styles from "./index.module.sass";

const SearchBar = ({ isSearchBarOpen }) => {
  const [value, setValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setIsInputActive(e.target.value !== "");
  };

  const handleClearClick = () => {
    setValue("");
    setIsInputActive(false);
  };
  return (
    <form
      className={`${styles.searchBarWrapper} ${
        isSearchBarOpen ? styles.activeSearchBar : ""
      }`}
    >
      <div className={styles.searchBar}>
        <button className={styles.searchBtn}>
          <Search />
        </button>
        <input
          type="text"
          className={
            styles.textbox + " " + (isInputActive ? styles.active : "")
          }
          placeholder="Поиск товаров"
          value={value}
          onChange={handleInputChange}
        />
        {isInputActive && (
          <button className={styles.clearBtn} onClick={handleClearClick}>
            <DeleteBtn />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
