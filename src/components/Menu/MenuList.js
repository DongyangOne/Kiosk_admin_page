import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";

function MenuList() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const GetMenu = async () => {
    await axios
      .get("http://116.39.208.72:8022/api2/menu", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  };

  useEffect(() => {
    GetMenu();
  }, []);

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
        {data.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default MenuList;
