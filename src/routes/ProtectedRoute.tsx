import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authentication/AuthProvider";


const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <></>
  );
};

export default ProtectedRoute;
