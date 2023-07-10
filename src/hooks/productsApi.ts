import { useCallback, useEffect, useState } from "react";
import { Product, ProductSpecification } from "../types";
import { api } from "../configs/axios";
import { AxiosError } from "axios";

const useGetManyProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null)
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
  }, []);

  return { data, loading, error, getData };
};

const useGetOneProduct = (id: string) => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null)
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
  }, [id]);

  return { data, loading, error, getData };
};

const useCreateOneProduct = () => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createData = useCallback(async (product: Product) => {
    setLoading(true);
    setError(null)
    try {
      const response = await api.post("/products", {
        ...product,
      });

      setData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response) setError(error.response.statusText);
        else setError(error.message);
      }
    }
    setLoading(false);
  }, []);

  return { data, loading, error, createData };
};

const useUpdateOneProduct = () => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateData = useCallback(async (product: Product) => {
    setLoading(true);
    setError(null)
    try {
      const response = await api.put(`/products/${product.id}`, {
        ...product,
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response) setError(error.response.statusText);
        else setError(error.message);
      }
    }
    setLoading(false);
  }, []);

  return { data, loading, error, updateData };
};

const useDeleteOneProduct = () => {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const deleteData = useCallback(async (id: string) => {
    setLoading(true);
    setError(null)
    try {
      const response = await api.delete(`/products/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response) setError(error.response.statusText);
        else setError(error.message);
      }
    }
    setLoading(false);
  }, []);

  return { data, loading, error, deleteData };
};

const useGetManySpecifications = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    setError(null)
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

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error, getData };
};

const useGetOneSpecification = () => {
  const [data, setData] = useState<ProductSpecification>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async (id: string) => {
    setLoading(true);
    setError(null)
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
  }, []);

  return { data, loading, error, getData };
};

const useCreateOneSpecification = () => {
  const [data, setData] = useState<ProductSpecification>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const createData = useCallback(
    async (specification: ProductSpecification) => {
      setError(null)
      setLoading(true);
      try {
        const response = await api.post("/specifications", {
          ...specification,
        });

        setData(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response) setError(error.response.statusText);
          else setError(error.message);
        }
      }
      setLoading(false);
    },
    []
  );

  return { data, loading, error, createData };
};

const useUpdateOneSpecification = () => {
  const [data, setData] = useState<ProductSpecification>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateData = useCallback(
    async (specification: ProductSpecification) => {
      setLoading(true);
      setError(null)
      try {
        const response = await api.put(`/specifications/${specification.id}`, {
          ...specification,
        });

        setData(response.data);
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          if (error.response) setError(error.response.statusText);
          else setError(error.message);
        }
      }
      setLoading(false);
    },
    []
  );

  return { data, loading, error, updateData };
};

const useDeleteOneSpecification = () => {
  const [data, setData] = useState<ProductSpecification>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const deleteData = useCallback(async (id: string) => {
    setLoading(true);
    setError(null)
    try {
      const response = await api.delete(`/specifications/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response) setError(error.response.statusText);
        else setError(error.message);
      }
    }
    setLoading(false);
  }, []);

  return { data, loading, error, deleteData };
};

export {
  useGetManyProducts,
  useGetOneProduct,
  useCreateOneProduct,
  useUpdateOneProduct,
  useDeleteOneProduct,
  useGetManySpecifications,
  useGetOneSpecification,
  useCreateOneSpecification,
  useUpdateOneSpecification,
  useDeleteOneSpecification,
};
