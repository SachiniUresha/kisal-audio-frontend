import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [stats, setStats] = useState({ users: 0, orders: 0, items: 0 });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/stats`, { 
            headers: { Authorization: `Bearer ${token}` } })
        .then(res => setStats(prev => ({ ...prev, users: res.data.users })));

    axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/stats`, { 
            headers: { Authorization: `Bearer ${token}` } })
        .then(res => setStats(prev => ({ ...prev, orders: res.data.orders })));

    axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/products/stats`, { 
            headers: { Authorization: `Bearer ${token}` } })
        .then(res => setStats(prev => ({ ...prev, items: res.data.products })));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessages(res.data.messages))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">{stats.users}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold">{stats.orders}</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Items</h2>
          <p className="text-3xl font-bold">{stats.items}</p>
        </div>
      </div>

      {/* Recent Messages */}
      <h2 className="text-2xl font-bold mb-4">Recent Messages</h2>
      {messages.length > 0 ? (
        <ul className="space-y-3">
          {messages.map((msg, i) => (
            <li key={i} className="p-4 bg-gray-100 rounded-lg shadow-sm border">
              <p className="font-semibold">{msg.name} - <span className="text-sm text-gray-500">{msg.phone}</span></p>
              <p className="text-sm text-gray-600">{msg.message}</p>
              <span className="text-xs text-gray-400">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No messages yet.</p>
      )}
    </div>
  );
}
