import React from 'react';

const SizeList = ({ size }) => {
  return (
    <li className="SizeCheckBox">
      <input type="radio" name="size" id={size} />
      <label for={size} className={size}>
        {size}
      </label>
    </li>
  );
};

export default SizeList;
