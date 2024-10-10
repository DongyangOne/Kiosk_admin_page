import React from "react";
import MenuItem from "./MenuItem";

function MenuList() {
  const menuItems = [
    {
      id: 1,
      name: "아메리카노",
      price: "3,000",
      category: "커피",
      status: "판매중",
    },
    // 반복되는 데이터 예시
    {
      id: 2,
      name: "아메리카노",
      price: "3,000",
      category: "커피",
      status: "판매중",
    },
    {
      id: 3,
      name: "아메리카노",
      price: "3,000",
      category: "커피",
      status: "판매중",
    },
    {
      id: 4,
      name: "아메리카노",
      price: "3,000",
      category: "커피",
      status: "판매중",
    },
  ];

  return (
    <table className="menu-table">
      <thead>
        <tr className="header">
          <th>번호</th>
          <th>이미지</th>
          <th>메뉴명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>상품 상태</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default MenuList;
