import { useState } from "react";

import SearchIcon from "../../../assets/icons/Search";

import styles from "./Search.module.sass";

const Search = ({ toggleSearchBar }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSearchClick = () => {
    toggleSearchBar();
    setIsActive(!isActive);
  };
  return (
    <div
      className={`${styles.search} ${isActive ? styles.active : ""}`}
      onClick={handleSearchClick}
    >
      <SearchIcon />
      <span>Поиск</span>
    </div>
  );
};

export default Search;
