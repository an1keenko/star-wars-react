import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";

export function BackButton() {
  return (
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <IconButton disableRipple>
        <ArrowBack fontSize="large" />
      </IconButton>
      <Typography variant="h5" color="#757575">
        Back to characters
      </Typography>
    </Link>
  );
}
