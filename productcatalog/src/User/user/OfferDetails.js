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
import { useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addToCart } from "../../redux/actions/cartActions";
import { deleteOffer, offerDetailList } from "../../redux/actions/offerActions";
import {
  offerProductIsSoldFalse,
  offerProductIsSoldTrue,
  offerProductTrue,
} from "../../redux/actions/productActions";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function OfferDetails() {
  const { offers } = useSelector((state) => state.offer);
  const { id } = useParams();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(offerDetailList(id));
  }, []);
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
  };
  const handleAddToCart = (cartItem) => {
    dispacth(addToCart(cartItem));
    dispacth(offerProductIsSoldFalse(cartItem));
    dispacth(
      openSnacbar({
        message: "Offer Approve",
        severity: "success",
      })
    );
  };
  return (
    <div>
    
        <Container maxWidth="lg">
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Offer Price</TableCell>
              <TableCell>Offer Amount</TableCell>
              <TableCell>Approve</TableCell>
              <TableCell>Delete Offer</TableCell>
            </TableRow>
            {offers.map((offer) => (
             

             
              <TableRow>
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
                {offer.product.productIsSold === true && (
                  <TableCell>
                    <Button
                    startIcon={<CheckCircleIcon></CheckCircleIcon>}
                      variant="contained"
                      color="success"
                      onClick={() => handleAddToCart(offer.product.productId)}
                    >
                      Approve
                    </Button>
                  </TableCell>
                )}
                {offer.product.productIsSold === false && (
                  <TableCell>
                    <Button startIcon={<CheckCircleIcon></CheckCircleIcon>} disabled variant="contained">
                      Approved
                    </Button>
                  </TableCell>
                )}
           
                <TableCell>
                  <Button
                  startIcon={<DeleteIcon></DeleteIcon>}
                    variant="contained"
                    color="error"
                    onClick={() => handleOfferDeleted(offer.offerId)}
                  >
                    Delete Offer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
   
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  
      
    </div>
    
  );
}
