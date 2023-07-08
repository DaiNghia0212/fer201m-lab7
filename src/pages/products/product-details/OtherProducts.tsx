import { Box, Typography } from "@mui/material";
import { useGetManyProducts } from "../../../hooks/productsApi";
import ProductCardsList from "../../../components/ProductCardsList";
import { Product } from "../../../types";

type Props = {
  productId: string;
};

const OtherProducts = ({ productId }: Props) => {
  const { data, loading, error } = useGetManyProducts();
  const filteredProducts = data.filter((product) => product.id !== productId);

  const otherProducts: Product[] = [];
  let count = 0;
  do {
    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    otherProducts.push(filteredProducts[randomIndex]);
    filteredProducts.splice(randomIndex, 1);
    count++;
  } while (count < 3);

  return (
    <Box mt={3} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" fontWeight={600} textAlign="center">
        Other Products
      </Typography>
      {!loading && !error ? <ProductCardsList items={otherProducts} /> : <></>}
    </Box>
  );
};

export default OtherProducts;
