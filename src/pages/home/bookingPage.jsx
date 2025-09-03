import { useEffect, useState } from "react";
import { loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BuyingCartPage() {
  const [cart, setCart] = useState(loadCart());
  const [total, setTotal] = useState(0);

  // 🔹 This function refreshes cart
  function reloadCart() {
    const newCart = loadCart();
    setCart(newCart);
  }

  // 🔹 Calculate total based on current cart state
  function calculateTotal(cartData) {

    if (!cartData || !cartData.orderedItems?.length) {
      setTotal(0);
      return;
    }

    const payload = {
    orderedItems: cartData.orderedItems,
    days: cartData.days || 1,
    startingDate: cartData.startingdate, // fix lowercase -> uppercase
    endingDate: cartData.endingdate
  };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/getQuote`, cartData)
      .then((res) => {
        console.log("Total response:", res.data);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.error(err);
        setTotal(0);
      });
  }

  // 🔹 Whenever cart changes, recalc total
  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  function handleOrderCreation() {
    const cartData = loadCart();
    const token = localStorage.getItem("token");

     const payload = {
    orderedItems: cartData.orderedItems,
    days: cartData.days || 1,
    startingDate: cartData.startingdate,
    endingDate: cartData.endingdate
  };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/createOrder`, cartData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("cart");
        toast.success("Order Created");
        reloadCart();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to create order");
      });
  }

  return (
    <div className="w-full h-full flex flex-col items-center mt-10 p-20">
      <h1 className="text-2xl font-bold text-black">Your Cart</h1>

      <div className="w-full flex flex-col items-center mt-4">
        {cart.orderedItems?.map((item) => (
          <BookingItem
            itemKey={item.key}
            key={item.key}
            qty={item.qty}
            refresh={reloadCart}
          />
        ))}
      </div>

      <div className="w-full flex justify-center mt-4">
        <p className="text-accent font-semibold">
          Total: {total.toFixed(2)}
        </p>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          className="bg-accent text-white px-4 py-2 rounded-md"
          onClick={handleOrderCreation}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
