import { useState } from "react";

import Sidebar from "../components/SideBar";
import MenuPage from "../components/MenuPage";
import OrderPage from "../components/OrderPage";

import "../styles/Main.css";

const Main = () => {
  const [content, setContent] = useState("menu");
  return (
    <div className="app">
      <Sidebar setContent={setContent} />
      {content === "menu" ? <MenuPage /> : <OrderPage />}
    </div>
  );
};
export default Main;
