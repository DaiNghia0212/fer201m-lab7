import { useEffect, useState } from "react";
import { Product, ProductSpecification } from "../types";
import { api } from "../configs/axios";
import { AxiosError } from "axios";

const useGetManyProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await api.get("/products");
        setData(response.data);
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response) setError(error.response.statusText);
          else setError(error.message);
        }
      }
      setLoading(false);
    };
    getData();
  }, []);

  return { data, loading, error };
};

const useGetOneProduct = (id: string) => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/products/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response) setError(error.response.statusText);
          else setError(error.message);
        }
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  return { data, loading, error };
};

const useGetOneProductSpecification = (id: string) => {
  const [data, setData] = useState<ProductSpecification>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await api.get(`/specifications/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response) setError(error.response.statusText);
          else setError(error.message);
        }
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  return { data, loading, error };
};

export { useGetManyProducts, useGetOneProduct, useGetOneProductSpecification };
