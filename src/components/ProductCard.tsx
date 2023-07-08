import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Product } from "../types";

type Props = {
  product: Product;
  onClick?: () => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <Card sx={{ height: "100%" }} onClick={onClick}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography variant="h6">{product.price} ₫</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
