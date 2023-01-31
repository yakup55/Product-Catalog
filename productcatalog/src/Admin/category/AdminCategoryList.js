import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCategory,
  getCategoryList,
} from "../../redux/actions/categoryActions";
import DeleteIcon from "@mui/icons-material/Delete";

import { openSnacbar } from "../../redux/actions/appActions";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
export default function AdminCategoryList() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const dispacth = useDispatch();
  const hadnledeletedcategory = (id) => {
    dispacth(deleteCategory(id));
    dispacth(
      openSnacbar({
        message: `Product has been deleted`,
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getCategoryList());
  });
  return (
    <Container maxWidth="sm">
      <Button
        startIcon={<BorderColorIcon></BorderColorIcon>}
        onClick={() => navigate("/adminaddcategory")}
        variant="contained"
      >
        Add Category
      </Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Kategori Adı</TableCell>
              <TableCell>Kategori Durumu</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {categories.map((category) => (
              <TableRow>
                <TableCell>{category.categoryId}</TableCell>
                <TableCell>{category.categoryName}</TableCell>
                <TableCell>{category.categoryStatus}</TableCell>
                <TableCell>
                  <Button
                    startIcon={<BuildCircleIcon></BuildCircleIcon>}
                    onClick={() =>
                      navigate(`/adminupdatecategory/${category.categoryId}`)
                    }
                    variant="contained"
                    color="success"
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => hadnledeletedcategory(category.categoryId)}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
