import { Link, Outlet } from "react-router-dom";

function Orders() {
return ( <div> <h2>Order Management</h2>


  <div className="order-links">
    <Link to="current">Current Orders</Link>
    <Link to="history">Order History</Link>
    <Link to="cancelled">Cancelled Orders</Link>
  </div>

  <div className="order-content">
    <Outlet />
  </div>
</div>


);
}

export default Orders;
