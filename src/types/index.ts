type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  specification: string;
};

type ProductSpecification = {
  id: string;
  cpu: string;
  ram: string;
  disk: string;
  gpu: string;
  monitor: string;
  os: string;
  weight: string;
  color: string;
  size: string;
};

type ProductFormData = {
  id: string;
  name: string;
  image: string;
  price: number;
  specificationId: string;
  cpu: string;
  ram: string;
  disk: string;
  gpu: string;
  monitor: string;
  os: string;
  weight: string;
  color: string;
  size: string;
};

export type { Product, ProductSpecification, ProductFormData };
