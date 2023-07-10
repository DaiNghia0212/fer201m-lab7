import { useGetOneSpecification } from "../../../hooks/productsApi";
import ProductSpecificationTable from "../../../components/ProductSpecificationTable";
import { ProductSpecification } from "../../../types";
import { useEffect } from "react";

type Props = {
  productId: string;
};

const Description = ({ productId }: Props) => {
  const { data, loading, error, getData } = useGetOneSpecification();

  useEffect(() => {
    getData(productId);
  }, [getData, productId]);

  return !loading && !error ? (
    <ProductSpecificationTable specification={data as ProductSpecification} />
  ) : (
    <></>
  );
};

export default Description;
