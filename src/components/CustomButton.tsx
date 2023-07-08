import { ReactNode } from "react";
import { Button, useTheme } from "@mui/material";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const CustomButton = ({ children, onClick }: Props) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "150px",
        height: "50px",
        ...(theme.palette.mode === "dark" && {
          backgroundColor: "#121212",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          color: "white",
        }),
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
