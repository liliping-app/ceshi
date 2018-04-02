import React from 'react';
function NumList (props) {
  const nums = props.nums;
  const lists = nums.map((num) => 
    <li key={num.toString()} value={num}>{num}</li>
  );
  return (
    <ul>{lists}</ul>
  );
}
export default NumList;