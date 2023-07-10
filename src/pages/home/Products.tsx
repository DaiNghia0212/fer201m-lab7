import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProductCardsList from "../../components/ProductCardsList";
import CustomButton from "../../components/CustomButton";
import { useGetManyProducts } from "../../hooks/productsApi";

const Products = () => {
  const { data, loading, error, getData } = useGetManyProducts();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box mt={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" fontWeight={600} textAlign="center">
        Products
      </Typography>
      {!loading && !error ? (
        <ProductCardsList items={data.slice(0, 6)} />
      ) : (
        <></>
      )}
      <CustomButton variant="contained" onClick={() => navigate("/products")}>
        View more
      </CustomButton>
    </Box>
  );
};

export default Products;
