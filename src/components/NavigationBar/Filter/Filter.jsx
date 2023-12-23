import classNames from "classnames";

import FilterIcon from "../../../assets/icons/Filter";

import styles from "./Filter.module.sass";

const Filter = ({ isMobileFilterOpen, handleMobileFilterOpen }) => {
  const filterClasses = classNames(styles.filter, {
    [styles.active]: isMobileFilterOpen,
  });
  return (
    <div
      className={filterClasses}
      onClick={() => {
        handleMobileFilterOpen();
      }}
    >
      <FilterIcon />
      Фильтр
    </div>
  );
};

export default Filter;
