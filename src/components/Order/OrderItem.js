import React from "react";

function OrderItem({ order }) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.date}</td>
      <td>{order.time}</td>
      <td>{order.amount}</td>
      <td>{order.method}</td>
    </tr>
  );
}

export default OrderItem;
