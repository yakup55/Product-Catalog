import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDetail, getDetailList } from "../../redux/actions/detailActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { Container } from "@mui/system";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from "@mui/icons-material/Delete";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
export default function AdminDetailList() {
  const { details } = useSelector((state) => state.detail);
  const handleDetailDeleted = (id) => {
    dispacth(deleteDetail(id));
    dispacth(
      openSnacbar({
        message: "Detail has been deleted",
        severity: "success",
      })
    );
  };
  console.log(details);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getDetailList());
  }, []);
  return (
    <Container maxWidth="md">
        <Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" onClick={()=>navigate("/admindetailadd")}>Detail Add</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>DetailExplanation </TableCell>
              <TableCell>Product Id </TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {details.map((detail) => (
              <TableRow>
                <TableCell>{detail.detailId}</TableCell>
                <TableCell>{detail.detailExplanation}</TableCell>
                <TableCell>{detail.productId}</TableCell>
                <TableCell>
                  <Button
                  startIcon={<BuildCircleIcon></BuildCircleIcon>}
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/adminupdatedetail/${detail.detailId}`)
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
                    onClick={() => handleDetailDeleted(detail.detailId)}
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
