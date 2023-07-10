import { useEffect, useState } from "react";
import ProductTable from "../../../components/ProductTable";
import { useGetManyProducts } from "../../../hooks/productsApi";
import ProductDetailModal from "../../../components/ProductDetailModal";
import { Product } from "../../../types";
import ProductUpdateModal from "../../../components/ProductUpdateModal";
import { Box } from "@mui/material";
import CustomButton from "../../../components/CustomButton";
import ProductCreateModal from "../../../components/ProductCreateModal";
import ProductDeleteModal from "../../../components/ProductDeleteModal";

const ManageProduct = () => {
  const { data, loading, error, getData } = useGetManyProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    getData();
  }, [getData]);

  const openDetailModal = (productId: string) => {
    setSelectedProduct(data.find((element) => element.id === productId));
    setDetailModalOpen(true);
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const openUpdateModal = (productId: string) => {
    setSelectedProduct(data.find((element) => element.id === productId));
    setUpdateModalOpen(true);
  };

  const openDeleteModal = (productId: string) => {
    setSelectedProduct(data.find((element) => element.id === productId));
    setDeleteModalOpen(true);
  };

  const moreActions = [
    { name: "Detail", action: openDetailModal },
    { name: "Edit", action: openUpdateModal },
    { name: "Delete", action: openDeleteModal },
  ];

  return (
    <Box mt={2} display="flex" flexDirection="column" alignItems="end">
      <ProductCreateModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={getData}
      />
      {selectedProduct ? (
        <>
          <ProductDetailModal
            image={{
              url: selectedProduct.image,
              alt: selectedProduct.name,
            }}
            specicationId={selectedProduct.specification}
            open={detailModalOpen}
            onClose={() => {
              setDetailModalOpen(false);
              setSelectedProduct(undefined);
            }}
          />
          <ProductUpdateModal
            product={selectedProduct}
            open={updateModalOpen}
            onClose={() => {
              setUpdateModalOpen(false);
              setSelectedProduct(undefined);
            }}
            onUpdate={getData}
          />
          <ProductDeleteModal
            productId={selectedProduct.id}
            specicationId={selectedProduct.specification}
            open={deleteModalOpen}
            onClose={() => {
              setDeleteModalOpen(false);
              setSelectedProduct(undefined);
            }}
            onDelete={getData}
          />
        </>
      ) : (
        <></>
      )}
      <CustomButton variant="contained" onClick={openCreateModal}>
        New Product
      </CustomButton>
      {!loading && !error ? (
        <ProductTable products={data} moreActions={moreActions} />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ManageProduct;
