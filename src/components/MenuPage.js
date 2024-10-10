import { useState } from "react";
import MenuList from "./Menu/MenuList";
import InputMenu from "./Input/InputMenu";

const MenuPage = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <div className="content">
      <h1>메뉴 관리</h1>
      {/* <InputMenu label="제품명" placeholder="메뉴를 입력하세요" /> */}
      <div className="wrap-middle">
        <input
          type="text"
          placeholder="메뉴를 검색하세요."
          className="search-bar"
        />
        <button
          onClick={() => {
            setAddModal(true);
          }}
          className="AddMenuBtn"
        >
          메뉴 추가하기
        </button>
      </div>
      <MenuList />
    </div>
  );
};

export default MenuPage;
