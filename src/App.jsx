import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";

function Home() {
return <h2>Welcome to Home Page</h2>;
}

function About() {
return <h2>About Us</h2>;
}

function Contact() {
return <h2>Contact Us</h2>;
}

function Orders() {
return ( <div> <h2>Order Management</h2>

  <nav>
    <Link to="current">Current Orders</Link>{" | "}
    <Link to="history">Order History</Link>{" | "}
    <Link to="cancelled">Cancelled Orders</Link>
  </nav>

  <Outlet />
</div>

);
}

function App() {
return ( <BrowserRouter> <h1>E-commerce Order Management</h1>

  <nav>
    <Link to="/">Home</Link>{" | "}
    <Link to="/about">About</Link>{" | "}
    <Link to="/contact">Contact</Link>{" | "}
    <Link to="/orders">Orders</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/orders" element={<Orders />}>
      <Route index element={<p>Select an order category.</p>} />
      <Route path="current" element={<p>Current Orders</p>} />
      <Route path="history" element={<p>Order History</p>} />
      <Route path="cancelled" element={<p>Cancelled Orders</p>} />
    </Route>
  </Routes>
</BrowserRouter>

);
}

export default App;
