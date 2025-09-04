import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthCallBack() {
  const { isLoading, isAuthenticated, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
        if (error) console.log("Auth0 error:", error);

    if (!isLoading && isAuthenticated) {
      navigate("/"); // Redirect after login
    }
  }, [isLoading, isAuthenticated, navigate]);

    if (error) return <p>Login failed: {error.message}</p>;


  return <p>Logging in...</p>;
}
