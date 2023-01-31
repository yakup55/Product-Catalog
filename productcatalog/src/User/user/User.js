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
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import {
  deleteOffer,
  getOfferList,
  offerProduct,
} from "../../redux/actions/offerActions";
import {
  getProductList,
  offerProductIsSoldFalse,
  offerProductIsSoldTrue,
  offerProductTrue,
  offerUser,
} from "../../redux/actions/productActions";
import AuthenticationService from "../../services/authenticationService";
import Offers from "./Offers";
import DeleteIcon from "@mui/icons-material/Delete";
export default function User() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { offers } = useSelector((state) => state.offer);

 
  const handleproductIsSoldFalse = (id) => {
    dispacth(offerProductIsSoldFalse(id));
    dispacth(
      openSnacbar({
        message: "Ürün onaylandı ve Satın alındı",
        severity: "success",
      })
    );
    navigate("/user");
  };
  const handleOfferDeleted = (id) => {
    dispacth(deleteOffer(id));
    dispacth(offerProductIsSoldTrue(id));
    dispacth(offerProductTrue(id));
    dispacth(
      openSnacbar({
        message: "Teklif Reddedildi",
        severity: "success",
      })
    );
    navigate("/user");
  };
  const id=user.userId
  useEffect(() => {
    dispacth(offerProduct(id));
  }, []);
  return (
    <Container maxWidth="md">
       <Button style={{margin:"auto",display:"block",marginBottom:5}} variant="contained" color="warning">Tekliflerim</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Offer Price</TableCell>
              <TableCell>Offer Amount</TableCell>
              <TableCell>Teklifi Sil</TableCell>
            </TableRow>
            {offers.map((offer) => (
              <TableRow>
                <TableCell>{offer.product?.productName}</TableCell>
                <TableCell>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`${offer.product?.productImage}`}
                  ></img>
                </TableCell>
                <TableCell>{offer.product?.productPrice}</TableCell>
                <TableCell>%{offer?.offerPrice}</TableCell>
                <TableCell>
                  {offer.product?.productPrice -
                    (offer.product?.productPrice * offer.offerPrice) / 100}
                </TableCell>
                <TableCell>
                  <Button
                  startIcon={<DeleteIcon></DeleteIcon>}
                    variant="contained"
                    color="error"
                    onClick={() => handleOfferDeleted(offer.offerId)}
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
      
     <Offers></Offers>
    </Container>
    
  );
}
