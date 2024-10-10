import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";

const OrderPage = () => {
  return (
    <div className="content">
      <h1>주문 관리</h1>
      <div className="order-container">
        <OrderList />
        <OrderDetail />
      </div>
    </div>
  );
};

export default OrderPage;
