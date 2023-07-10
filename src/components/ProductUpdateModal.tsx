import { useEffect } from "react";
import { Typography } from "@mui/material";
import {
  useGetOneSpecification,
  useUpdateOneProduct,
  useUpdateOneSpecification,
} from "../hooks/productsApi";
import CustomModal from "./CustomModal";
import ProductForm from "./ProductForm";
import { Product, ProductFormData, ProductSpecification } from "../types";

type Props = {
  product: Product;
  open: boolean;
  onClose: () => void;
  onUpdate: () => void;
};

const ProductUpdateModal = ({ product, open, onClose, onUpdate }: Props) => {
  const {
    data: specification,
    loading,
    getData: getOneSpecification,
  } = useGetOneSpecification();
  const { updateData: updateOneProduct } = useUpdateOneProduct();
  const { updateData: updateOneSpecification } = useUpdateOneSpecification();

  useEffect(() => {
    getOneSpecification(product.id);
  }, [getOneSpecification, product]);

  const handleSubmit = async (values: ProductFormData) => {
    console.log(values.price)
    const updatedProduct: Product = {
      id: values.id,
      name: values.name,
      price: values.price,
      image: values.image,
      specification: values.specificationId,
    };
    const updatedSpecification: ProductSpecification = {
      id: values.specificationId,
      cpu: values.cpu,
      ram: values.ram,
      disk: values.disk,
      gpu: values.gpu,
      monitor: values.monitor,
      os: values.os,
      weight: values.weight,
      color: values.color,
      size: values.size,
    };

    await updateOneProduct(updatedProduct);
    await updateOneSpecification(updatedSpecification);
    onUpdate();
    onClose();
  };

  const initialFormValues: ProductFormData = {
    ...product,
    ...(specification as ProductSpecification),
    id: product.id,
    specificationId: specification?.id as string,
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <Typography variant="h3" fontWeight={600} textAlign="center">
        Update Product
      </Typography>
      {!loading && (
        <ProductForm
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
        />
      )}
    </CustomModal>
  );
};

export default ProductUpdateModal;
