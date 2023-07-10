import { Container, Typography } from "@mui/material";
import ManageProduct from "./ManageProduct";

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="h2" fontWeight={600} textAlign="center">
        Products Management
      </Typography>
      <ManageProduct />
    </Container>
  );
};

export default Dashboard;
