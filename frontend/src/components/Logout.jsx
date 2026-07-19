import React from "react";
import { useAuth } from "../context/auth-context";
import toast from "react-hot-toast";

function Logout() {
  const [, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser(undefined);
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
    } catch (error) {
      toast.error("Error: " + error);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;