import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "/images/logo.png";
import Bookmark from "@mui/icons-material/BookmarkBorderOutlined";

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <IconButton disableRipple sx={{ width: "200px", height: "100px" }}>
          <img src={logo} alt="Logo" />
        </IconButton>
      </Link>
      <Link to="/favourites">
        <IconButton edge="end" color="inherit">
          <Bookmark fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
