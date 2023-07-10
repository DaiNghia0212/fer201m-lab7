import { useEffect } from "react";
import { useGetOneSpecification } from "../hooks/productsApi";
import ProductSpecificationTable from "./ProductSpecificationTable";
import CustomModal from "./CustomModal";
import { ProductSpecification } from "../types";
import { Typography } from "@mui/material";

type Props = {
  image: { url: string; alt: string };
  specicationId: string;
  open: boolean;
  onClose: () => void;
};

const ProductDetailModal = ({ image, specicationId, open, onClose }: Props) => {
  const { data, loading, error, getData } = useGetOneSpecification();
  useEffect(() => {
    if (specicationId) getData(specicationId);
  }, [getData, specicationId]);

  return (
    <CustomModal open={open} onClose={onClose}>
      <Typography variant="h3" fontWeight={600} textAlign="center">
        Product Detail
      </Typography>
      <div style={{ width: "400px", margin: "auto" }}>
        <img src={image.url} alt={image.alt} width="100%" />
      </div>
      {!loading && !error ? (
        <ProductSpecificationTable
          specification={data as ProductSpecification}
        />
      ) : (
        <></>
      )}
    </CustomModal>
  );
};

export default ProductDetailModal;
