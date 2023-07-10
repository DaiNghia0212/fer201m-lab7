import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Product } from "../types";
import MoreActionButton from "./MoreActionButton";

type Props = {
  products: Product[];
  moreActions: { name: string; action: (productId: string) => void }[];
};

interface Column extends TableCellProps {
  id: keyof Product;
  label: string;
  minWidth?: string;
  format?: (value: number) => string;
}

const columns: Column[] = [
  {
    id: "name",
    label: "Name",
    minWidth: "100px",
    align: "left",
  },
  {
    id: "price",
    label: "Price (₫)",
    minWidth: "50px",
    align: "right",
    format: (value: number) => value.toLocaleString("vi-VN"),
  },
];

const ProductTable = ({ products, moreActions }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", marginTop: "10px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                style={{
                  minWidth: 50,
                  fontWeight: 600,
                }}
              >
                No.
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 600,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                align="center"
                style={{
                  minWidth: 50,
                  fontWeight: 600,
                }}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.id}
                  >
                    <TableCell>{index + 1}</TableCell>
                    {columns.map((column) => {
                      const value = product[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center">
                      <MoreActionButton id={product.id} items={moreActions} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ProductTable;
