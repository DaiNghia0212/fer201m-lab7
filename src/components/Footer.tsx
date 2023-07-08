
import { Box, Paper, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt="20px" component="footer">
      <Paper sx={{ width: "100%", py: "20px", bgcolor: theme.palette.mode === 'light' ? "primary.main" : 'paper.dark'}}>
        <Typography variant="body1" textAlign="center" color={theme.palette.mode === 'light' ? "white" : 'text.primary'}>
          copyright &copy; 2023
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
