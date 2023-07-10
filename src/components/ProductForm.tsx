import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { ProductFormData } from "../types";

const validationSchema = yup.object({
  name: yup
    .string()
    .max(50, "Name should be of maximum 50 characters length")
    .required("Name is required"),
  image: yup
    .string()
    .url("Enter a valid URL")
    .matches(
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
      "Please enter a valid image URL"
    )
    .required("Image URL is required"),
  price: yup
    .number()
    .integer()
    .min(0, "Price should be equal or greater than 0")
    .required("Price is required"),
  cpu: yup.string().required("CPU specification is required"),
  ram: yup.string().required("RAM specification is required"),
  disk: yup.string().required("Disk specification is required"),
  gpu: yup.string().required("GPU specification is required"),
  monitor: yup.string().required("Monitor specification is required"),
  os: yup.string().required("OS specification is required"),
  weight: yup.string().required("Weight is required"),
  color: yup.string().required("Color is required"),
  size: yup.string().required("Size is required"),
});

type Props = {
  initialValues: ProductFormData;
  onSubmit: (values: ProductFormData) => void;
};

const ProductForm = ({ initialValues, onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="id"
          name="id"
          value={formik.values.id}
          sx={{ display: "none" }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          margin="normal"
          id="image"
          name="image"
          label="Image"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
        <TextField
          fullWidth
          margin="normal"
          id="price"
          name="price"
          label="Price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          fullWidth
          id="specificationId"
          name="specificationId"
          value={formik.values.specificationId}
          sx={{ display: "none" }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="cpu"
          name="cpu"
          label="CPU"
          value={formik.values.cpu}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cpu && Boolean(formik.errors.cpu)}
          helperText={formik.touched.cpu && formik.errors.cpu}
        />
        <TextField
          fullWidth
          margin="normal"
          id="ram"
          name="ram"
          label="RAM"
          value={formik.values.ram}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.ram && Boolean(formik.errors.ram)}
          helperText={formik.touched.ram && formik.errors.ram}
        />
        <TextField
          fullWidth
          margin="normal"
          id="disk"
          name="disk"
          label="Disk"
          value={formik.values.disk}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.disk && Boolean(formik.errors.disk)}
          helperText={formik.touched.disk && formik.errors.disk}
        />
        <TextField
          fullWidth
          margin="normal"
          id="gpu"
          name="gpu"
          label="GPU"
          value={formik.values.gpu}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gpu && Boolean(formik.errors.gpu)}
          helperText={formik.touched.gpu && formik.errors.gpu}
        />
        <TextField
          fullWidth
          margin="normal"
          id="monitor"
          name="monitor"
          label="Monitor"
          value={formik.values.monitor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.monitor && Boolean(formik.errors.monitor)}
          helperText={formik.touched.monitor && formik.errors.monitor}
        />
        <TextField
          fullWidth
          margin="normal"
          id="os"
          name="os"
          label="OS"
          value={formik.values.os}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.os && Boolean(formik.errors.os)}
          helperText={formik.touched.os && formik.errors.os}
        />
        <TextField
          fullWidth
          margin="normal"
          id="weight"
          name="weight"
          label="Weight"
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />
        <TextField
          fullWidth
          margin="normal"
          id="color"
          name="color"
          label="Color"
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
        />
        <TextField
          fullWidth
          margin="normal"
          id="size"
          name="size"
          label="Size"
          value={formik.values.size}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
