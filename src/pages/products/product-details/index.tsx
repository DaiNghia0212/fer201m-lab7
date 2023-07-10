import { useEffect } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProduct } from "../../../hooks/productsApi";
import CustomButton from "../../../components/CustomButton";
import Description from "./Description";
import OtherProducts from "./OtherProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, getData } = useGetOneProduct(id as string);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container maxWidth="lg">
      {!loading && !error ? (
        <>
          <Grid container mt={2}>
            <Grid item xs={12} md={5} lg={4}>
              <Paper>
                <img src={data?.image} alt={data?.name} width="100%" />
              </Paper>
              <Box marginY={2}>
                <Typography gutterBottom variant="h4">
                  {data?.name}
                </Typography>
                <Typography variant="h5">{data?.price.toLocaleString("vi-VN")} ₫</Typography>
              </Box>
              <CustomButton variant="contained" onClick={() => navigate("/")}>
                Go to store
              </CustomButton>
            </Grid>
            <Grid item md={7} lg={8} paddingLeft={4}>
              <Description productId={data?.id as string} />
            </Grid>
          </Grid>
          <OtherProducts productId={id as string} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ProductDetails;
