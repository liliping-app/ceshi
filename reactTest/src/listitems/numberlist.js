import React from 'react';
function NumberList(props) {
  const numbers2 = props.numbers2;
  const listItems2 = numbers2.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems2}</ul>
  )
}
export default NumberList;