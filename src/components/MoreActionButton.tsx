import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  id: string;
  items: {
    name: string;
    action: (id: string) => void;
  }[];
};

const MoreActionButton = ({ id, items }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id={`more-action-button-${id}`}
        aria-controls={open ? `more-action-menu-${id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`more-action-menu-${id}`}
        aria-labelledby={`more-action-button-${id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        {items.map((item) => (
          <MenuItem
            onClick={() => {
              item.action(id);
              handleClose();
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreActionButton;
