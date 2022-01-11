import React from 'react';

const ColorList = ({ color }) => {
  return (
    <li>
      <input type="radio" name="color" id={color} />
      <label for={color} className={color}>
        {color}
      </label>
    </li>
  );
};

export default ColorList;
