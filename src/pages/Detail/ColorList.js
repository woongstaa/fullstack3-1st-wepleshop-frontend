import React from 'react';

const ColorList = ({ color, cartColorSet }) => {
  return (
    <li>
      <input type="radio" name="color" id={color} onChange={cartColorSet} />
      <label for={color} className={color}>
        {color}
      </label>
    </li>
  );
};

export default ColorList;
