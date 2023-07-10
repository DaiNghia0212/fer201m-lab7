import { useEffect, useState } from "react";
import { Container, Pagination, Typography } from "@mui/material";
import ProductCardsList from "../../components/ProductCardsList";
import { useGetManyProducts } from "../../hooks/productsApi";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error, getData } = useGetManyProducts();
  const items = data.slice((page - 1) * 6, (page - 1) * 6 + 6);
  const totalPages = Math.ceil(data.length / 6);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Typography mt={2} variant="h2" fontWeight={600} textAlign="center">
        Products
      </Typography>
      {!loading && !error ? <ProductCardsList items={items} /> : <></>}
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
};

export default Products;
