import React from "react";

function MenuItem({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <img src={item.img} alt={item.name} className="menu-img" />
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      <td>{item.status}</td>
      <td>
        <button className="edit-btn">수정하기</button>
      </td>
      <td>
        <button className="delete-btn">삭제하기</button>
      </td>
    </tr>
  );
}

export default MenuItem;
