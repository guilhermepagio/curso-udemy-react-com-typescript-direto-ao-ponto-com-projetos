import React from "react";

const NumberList = ({ numbers }) => {
  return (
    <div>
      <h3>Number List</h3>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
