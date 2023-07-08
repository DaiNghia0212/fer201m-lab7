import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { AuthContext } from "../../context/authentication/AuthProvider";
import { Box } from "@mui/material";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    !user && (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <GoogleButton onClick={login} />
      </Box>
    )
  );
};

export default Login;
