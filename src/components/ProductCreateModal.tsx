import { Typography } from "@mui/material";
import {
  useCreateOneProduct,
  useCreateOneSpecification,
} from "../hooks/productsApi";
import CustomModal from "./CustomModal";
import ProductForm from "./ProductForm";
import { Product, ProductFormData, ProductSpecification } from "../types";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
};

const ProductCreateModal = ({ open, onClose, onCreate }: Props) => {
  const { createData: createOneProduct } = useCreateOneProduct();
  const { createData: createOneSpecification } = useCreateOneSpecification();

  const handleSubmit = async (values: ProductFormData) => {
    const specification: ProductSpecification = {
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

    const createdSpecification = await createOneSpecification(specification);

    const product: Product = {
      id: values.id,
      name: values.name,
      price: values.price,
      image: values.image,
      specification: createdSpecification.id,
    };

    await createOneProduct(product);
    onCreate();
    onClose();
  };

  const initialFormValues: ProductFormData = {
    id: "",
    name: "",
    price: 0,
    image: "",
    specificationId: "",
    cpu: "",
    ram: "",
    disk: "",
    gpu: "",
    monitor: "",
    os: "",
    weight: "",
    color: "",
    size: "",
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <Typography variant="h3" fontWeight={600} textAlign="center">
        Create Product
      </Typography>
      <ProductForm initialValues={initialFormValues} onSubmit={handleSubmit} />
    </CustomModal>
  );
};

export default ProductCreateModal;
