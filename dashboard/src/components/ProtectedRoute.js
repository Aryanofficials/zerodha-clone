import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get(
          "https://zerodha-clone-wz77.onrender.com/profile",
          {
            withCredentials: true,
          }
        );

        setAuthenticated(true);
      } catch (error) {
        window.location.href =
          "https://zerodha-frontend-ae5z.onrender.com/auth?mode=login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h2>Checking session...</h2>;
  }

  return authenticated ? children : null;
};

export default ProtectedRoute;