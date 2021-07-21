import React from "react";

import styles from "./Filter.module.css";

const Fiter = ({ value, onChange }) => (
  <label>
    <span className={styles.title_filter}>Find contacts by name</span>
    <input
      className={styles.input_filter}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Fiter;
