import React from "react";

interface ListItem {
  item : string[]
}

const ULLi: React.FC<ListItem> = ({ item }) => {
  return (
    <ul>
      {item.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ULLi;