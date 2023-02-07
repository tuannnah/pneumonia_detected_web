import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { Box } from "@mui/system";
import * as React from "react";

const CustomPopover = ({
  title,
  content,
  variant = "contained",
  showDropdownIcon = false,
  sx,
  size = "medium",
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant={variant}
        onClick={handlePopoverOpen}
        sx={sx}
        size={size}
      >
        {title}{" "}
        {showDropdownIcon &&
          (Boolean(anchorEl) ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          ))}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 1 }}>{content}</Box>
      </Popover>
    </>
  );
};

export default CustomPopover;
