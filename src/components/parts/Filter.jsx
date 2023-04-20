import React from 'react';
import css from './/Filter.module.css';

const Filter = ({value, onChange }) => (
   <label className={css.label}>
      <p className={css.label__text}>Filter</p>
      <input
         className={css.label__input}
         type="text"
         value={value}
         onChange={onChange}
      />
   </label>
);

export default Filter;
