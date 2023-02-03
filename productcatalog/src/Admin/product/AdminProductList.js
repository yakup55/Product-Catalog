import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteProduct,
  getProductList,
} from "../../redux/actions/productActions";
import { openSnacbar } from "../../redux/actions/appActions";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function AdminProductList() {
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handledeletedproduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(
      openSnacbar({
        message: "Product has been deleted",
      })
    );
  };
  useEffect(() => {
    dispatch(getProductList());
  });
  return (
    <Container>
      <Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={() => navigate("/adminaddproduct")}>
        Add Product
      </Button>
      <Button style={{marginLeft:10}} startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={()=>navigate("/admindetailadd")}>Detail Add</Button>
      <TableContainer>
        <TableBody>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product Description</TableCell>
            <TableCell>Product Price</TableCell>

            <TableCell>Product Image</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.productId}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.productDescription}</TableCell>
              <TableCell>{product.productPrice}</TableCell>

              <TableCell>
                <img
                  style={{ width: 100, height: 100 }}
                  src={`${product.productImage}`}
                ></img>
              </TableCell>
              <TableCell>
                <Button
                startIcon={<BuildCircleIcon></BuildCircleIcon>}
                  variant="contained"
                  color="success"
                  onClick={() =>
                    navigate(`/adminupdateproduct/${product.productId}`)
                  }
                >
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  startIcon={<DeleteIcon />}
                  variant="contained"
                  color="error"
                  onClick={() => handledeletedproduct(product.productId)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}
