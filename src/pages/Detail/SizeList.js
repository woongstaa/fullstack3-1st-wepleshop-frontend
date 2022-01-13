import React from 'react';

const SizeList = ({ size, cartSizeSet }) => {
  return (
    <li className="SizeCheckBox">
      <input type="radio" name="size" id={size} onChange={cartSizeSet} />
      <label for={size} className={size}>
        {size}
      </label>
    </li>
  );
};

export default SizeList;
