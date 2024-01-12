import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        p: "2rem",
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        component="div"
        color="text.secondary"
        align="center"
      >
        Created by
        <Typography color="text.primary">Ihar Anikeyenka</Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        © {currentYear}
      </Typography>
    </Box>
  );
}
