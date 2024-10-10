import React from "react";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const orders = [
    {
      id: 1,
      date: "2024.09.09",
      time: "13:21",
      amount: "3,000",
      method: "카드",
    },
    // 반복되는 데이터 예시
    {
      id: 2,
      date: "2024.09.09",
      time: "13:21",
      amount: "3,000",
      method: "카드",
    },
    {
      id: 3,
      date: "2024.09.09",
      time: "13:21",
      amount: "3,000",
      method: "카드",
    },
    // ...
  ];

  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>주문 날짜</th>
          <th>주문 시간</th>
          <th>주문 금액</th>
          <th>주문 방법</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
