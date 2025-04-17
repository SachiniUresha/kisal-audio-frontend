import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            const token = localStorage.getItem("token");
            axios
                .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })


                .then((res) => {
                    setUsers(res.data);
                    console.log(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [loading]);

    function handleBlockUser(email){
       // const email = email;
        const token = localStorage.getItem("token");

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/block/${email}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            setLoading(true);
        }).catch((err)=>{
            console.error(err);
        })
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Admin Users Page</h1>

            {loading ? (
                <p className="text-gray-500">Loading users...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-3 px-4 text-left">Profile</th>
                                <th className="py-3 px-4 text-left">Full Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Phone</th>
                                <th className="py-3 px-4 text-left">Address</th>
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <img
                                            src={user.profilePicture}
                                            alt="profile"
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="py-3 px-4">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="py-3 px-4">{user.email}</td>
                                    <td className="py-3 px-4">{user.phone}</td>
                                    <td className="py-3 px-4">{user.address}</td>
                                    <td className="py-3 px-4 capitalize">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                                            ${user.role === "admin" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td onClick={()=>{handleBlockUser(user.email)}}className="py-3 px-4 cursor-pointer">{user.isBlocked?"BLOCKED":"ACTIVE"}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
