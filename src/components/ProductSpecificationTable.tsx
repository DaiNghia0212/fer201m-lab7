import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableRow,
} from "@mui/material";
import { ProductSpecification } from "../types";

type Props = {
  specification: ProductSpecification;
};

interface Column extends TableCellProps {
  id: keyof ProductSpecification;
  label: string;
}

const columns: Column[] = [
  {
    id: "cpu",
    label: "CPU",
  },
  {
    id: "ram",
    label: "RAM",
  },
  {
    id: "disk",
    label: "Disk",
  },
  {
    id: "gpu",
    label: "GPU",
  },
  {
    id: "monitor",
    label: "Monitor",
  },
  {
    id: "os",
    label: "OS",
  },
  {
    id: "weight",
    label: "Weight",
  },
  {
    id: "color",
    label: "Color",
  },
  {
    id: "size",
    label: "Size",
  },
];

const ProductSpecificationTable = ({ specification }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" border={2}>
        <TableBody>
          {columns.map((column) => (
            <TableRow>
              <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                {column.label}
              </TableCell>
              <TableCell align="left">{specification[column.id]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductSpecificationTable;
