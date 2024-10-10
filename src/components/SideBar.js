import React from "react";

const Sidebar = ({ setContent }) => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <ul className="menu">
        <li
          onClick={() => {
            setContent("menu");
          }}
        >
          <image />
          메뉴 관리
        </li>
        <li
          onClick={() => {
            setContent("order");
          }}
        >
          <image />
          주문 관리
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
