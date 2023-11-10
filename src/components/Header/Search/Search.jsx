import SearchIcon from "../../../assets/icons/Search";

import styles from "./Search.module.sass";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input type="text" placeholder="Поиск" name="searchbox" id="searchbox" />
    </div>
  );
};

export default Search;
