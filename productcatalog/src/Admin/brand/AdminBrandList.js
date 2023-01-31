import { TableContainer } from "@chakra-ui/react";
import { Button, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { deleteBrand, getBrandList } from "../../redux/actions/brandActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function AdminBrandList() {
  const { brands } = useSelector((state) => state.brand);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handleBrandDeleted = (id) => {
    dispacth(deleteBrand(id));
    dispacth(
      openSnacbar({
        message: "Has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getBrandList());
  },[]);
  return (
    <Container maxWidth="sm">
        <Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={()=>navigate("/adminbrandadd")}>Brand Add</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {brands.map((brand) => (
              <TableRow>
                <TableCell>{brand.brandId}</TableCell>
                <TableCell>{brand.brandName}</TableCell>
                <TableCell>
                  <Button
                  startIcon={<BuildCircleIcon></BuildCircleIcon>}
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/adminupdatebrand/${brand.brandId}`)
                    }
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                  startIcon={<DeleteIcon></DeleteIcon>}
                    variant="contained"
                    color="error"
                    onClick={() => handleBrandDeleted(brand.brandId)}
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
