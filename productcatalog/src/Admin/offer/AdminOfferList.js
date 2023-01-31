import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { deleteOffer, getOfferList } from "../../redux/actions/offerActions";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
export default function AdminOfferList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { offers } = useSelector((state) => state.offer);
  const handleOfferDeleted = (id) => {
    dispacth(deleteOffer(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getOfferList());
  }, []);
  return (
    <Container maxWidth="md">
      <Button
        startIcon={<BorderColorIcon></BorderColorIcon>}
        variant="contained"
        onClick={() => navigate("/adminofferadd")}
      >
        offer Add
      </Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Offer Price</TableCell>
              <TableCell>Product Id</TableCell>
              <TableCell>User Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {offers.map((offer) => (
              <TableRow>
                <TableCell>{offer?.offerId}</TableCell>
                <TableCell>{offer?.offerPrice}</TableCell>
                <TableCell>{offer?.productId}</TableCell>
                <TableCell>{offer?.userId}</TableCell>
                <TableCell>
                  <Button
                    startIcon={<BuildCircleIcon></BuildCircleIcon>}
                    variant="contained"
                    color="success"
                    onClick={() =>
                      navigate(`/adminupdateoffer/${offer?.offerId}`)
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
                    onClick={() => handleOfferDeleted(offer?.offerId)}
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
