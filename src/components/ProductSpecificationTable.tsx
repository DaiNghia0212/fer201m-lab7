import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { ProductSpecification } from "../types";
import { TableHeading } from "../styles/ProductSpecificationTable.styled";

type Props = {
  specification: ProductSpecification;
};

const ProductSpecificationTable = ({ specification }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" border={2}>
        <TableBody>
          <TableRow>
            <TableHeading component="th" scope="row">
              CPU
            </TableHeading>
            <TableCell align="left">{specification.cpu}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              RAM
            </TableHeading>
            <TableCell align="left">{specification.ram}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              Disk
            </TableHeading>
            <TableCell align="left">{specification.disk}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              GPU
            </TableHeading>
            <TableCell align="left">{specification.gpu}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              Monitor
            </TableHeading>
            <TableCell align="left">{specification.monitor}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              OS
            </TableHeading>
            <TableCell align="left">{specification.os}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              Weight
            </TableHeading>
            <TableCell align="left">{specification.weight}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              Color
            </TableHeading>
            <TableCell align="left">{specification.color}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading component="th" scope="row">
              Size
            </TableHeading>
            <TableCell align="left">{specification.size}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductSpecificationTable;
