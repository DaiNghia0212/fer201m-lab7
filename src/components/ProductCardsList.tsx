import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../types";

type Props = {
  items: Product[];
};

const ProductCardsList = ({ items }: Props) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={4} marginY={2}>
      {items.map((item) => (
        <Grid item xs={12} md={6} lg={4} key={item.id}>
          <ProductCard
            product={item}
            onClick={() => navigate(`/products/${item.id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardsList;
