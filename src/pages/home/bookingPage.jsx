import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BuyingCartPage() {
  const [cart, setCart] = useState(loadCart());
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  // 🔹 Refresh cart
  function reloadCart() {
    const newCart = loadCart();
    setCart(newCart);
  }

  // 🔹 Calculate total
  useEffect(() => {
    if (!cart || !cart.orderedItems?.length) {
      setTotal(0);
      return;
    }
    const fullTotal = cart.orderedItems.reduce(
      (sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 1),
      0
    );
    setTotal(fullTotal);
  }, [cart]);

  // 🔹 Fetch previous orders
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/myOrders`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data.orders))
      .catch((err) => toast.error("Failed to fetch previous orders"));
  }, []);

  // 🔹 Create order
  function handleOrderCreation() {
    const cartData = loadCart();
    const token = localStorage.getItem("token");

    const payload = {
      orderedItems: cartData.orderedItems,
      days: cartData.days || 1,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Order Created");
        localStorage.removeItem("cart");
        reloadCart();
        // Refresh previous orders
        setOrders((prev) => [res.data.order, ...prev]);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to create order");
      });
  }

  return (
    <div className="w-full h-full flex flex-col items-center mt-10 p-20">
      <h1 className="text-2xl font-bold text-black">Your Cart</h1>

      {/* Cart Items */}
      <div className="w-full flex flex-col items-center mt-4">
        {cart.orderedItems?.map((item) => (
          <BookingItem
            itemKey={item.key}
            key={item.key}
            qty={item.qty}
            price={item.price}
            refresh={reloadCart}
          />
        ))}
      </div>

      {/* Total & Place Order */}
      <div className="w-full flex justify-center mt-4">
        <p className="text-accent font-semibold">Total: {total.toFixed(2)}</p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          className="bg-accent text-white px-4 py-2 rounded-md"
          onClick={handleOrderCreation}
        >
          Place Order
        </button>
      </div>

      {/* Previous Orders */}
      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>
        {orders.length > 0 ? (
          <ul className="space-y-3">
            {orders.map((order) => (
              <li
                key={order._id}
                className="p-4 border rounded-lg bg-gray-50"
              >
                <p>
                  <strong>Order ID:</strong> {order.orderId}
                </p>
                <p>
                  <strong>Total:</strong> Rs.{order.totalAmount.toFixed(2)}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Ordered At:</strong>{" "}
                  {new Date(order.orderDate).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No previous orders yet.</p>
        )}
      </div>
    </div>
  );
}
