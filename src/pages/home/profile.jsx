import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // fetch user profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first!");
      return;
    }

    axios
      .get(`${backendUrl}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setFormData(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch user profile");
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const token = localStorage.getItem("token");
    axios
      .put(`${backendUrl}/api/users/${user.email}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser(formData);
        setEditMode(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile");
      });
  };

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 mt-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user.profilePicture}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.role.toUpperCase()}</p>
        </div>

        {/* Profile Info */}
        <div className="mt-6 space-y-4">
          {["firstName", "lastName", "phone", "address"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full px-3 py-2 mt-1 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ))}

          {/* Email (readonly) */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full px-3 py-2 mt-1 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          {editMode ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  setFormData(user);
                }}
                className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
