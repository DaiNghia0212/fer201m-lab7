import { ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = {
  children: ReactNode;
  color?: ButtonProps["color"];
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  style?: object;
};

const CustomButton = ({ children, variant, color, onClick, style }: Props) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "150px",
        height: "50px"
      }}
      style={style}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
