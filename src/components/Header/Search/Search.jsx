import React from "react";

import SearchIcon from "../../../assets/icons/Search";

import styles from "./Search.module.sass";

const Search = ({ toggleSearchBar }) => {
  return (
    <div className={styles.search} onClick={toggleSearchBar}>
      <SearchIcon />
      <span>Поиск</span>
    </div>
  );
};

export default Search;
