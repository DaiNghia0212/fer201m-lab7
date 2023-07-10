import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";
import {
  useDeleteOneProduct,
  useDeleteOneSpecification,
} from "../hooks/productsApi";

type Props = {
  productId: string;
  specicationId: string;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const ProductDeleteModal = ({
  productId,
  specicationId,
  open,
  onClose,
  onDelete,
}: Props) => {
  const { deleteData: deleteProduct } = useDeleteOneProduct();
  const { deleteData: deleteSpecification } = useDeleteOneSpecification();

  const handleDelete = async () => {
    await deleteProduct(productId);
    await deleteSpecification(specicationId);
    onDelete();
    onClose();
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <Typography variant="h3" fontWeight={600} textAlign="center">
        Are you sure to delete this product?
      </Typography>
      <Box mt={2} display="flex" justifyContent="end">
        <CustomButton
          color="error"
          variant="contained"
          onClick={handleDelete}
          style={{ marginRight: "10px" }}
        >
          Delete
        </CustomButton>
        <CustomButton onClick={onClose} variant="outlined">
          Cancel
        </CustomButton>
      </Box>
    </CustomModal>
  );
};

export default ProductDeleteModal;
