import { useGetOneProductSpecification } from "../../../hooks/productsApi";
import ProductSpecificationTable from "../../../components/ProductSpecificationTable";
import { ProductSpecification } from "../../../types";

type Props = {
  productId: string;
};

const Description = ({ productId }: Props) => {
  const { data, loading, error } = useGetOneProductSpecification(productId);

  return !loading && !error ? (
    <ProductSpecificationTable specification={data as ProductSpecification} />
  ) : (
    <></>
  );
};

export default Description;
