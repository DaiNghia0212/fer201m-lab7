import { Container } from "@mui/material";
import Banner from "./Banner";
import Products from "./Products";
// import Blogs from "./Blogs";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Banner />
      <Products />
      {/* <Blogs /> */}
    </Container>
  );
};

export default Home;
