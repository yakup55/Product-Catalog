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
import { deleteOffer, offerProduct } from "../../redux/actions/offerActions";
import { offerProductIsSoldFalse, offerProductIsSoldTrue, offerProductTrue, offerUser } from "../../redux/actions/productActions";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function Offers() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const id = user.userId;
  useEffect(() => {
    dispacth(offerUser(id));
  }, []);
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
  return (
    <Container maxWidth="md">
       <Button
          style={{ margin: "auto", display: "block",marginTop:80 }}
          variant="contained"
          color="warning"
        >
         Ürünlerim
        </Button>
      <Button startIcon={<BorderColorIcon></BorderColorIcon>} onClick={()=>navigate("/adminaddproduct")} variant="contained" style={{marginTop:10}}>Product Add</Button>
    <TableContainer style={{ marginTop: 10 }}>
       
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Teklifleri Gör</TableCell>
            </TableRow>
            {products.map((product) => (
              <TableRow>
                <TableCell>{product.productName}</TableCell>
                <TableCell>
                  <img
                    style={{ height: 100, width: 100 }}
                    src={`${product.productImage}`}
                  ></img>
                </TableCell>
                <TableCell>{product.productPrice}</TableCell>
                <TableCell><Button startIcon={<PrivacyTipIcon></PrivacyTipIcon>} variant="contained" onClick={()=>navigate(`/offerdetails/${product.productId}`)}>İncele</Button></TableCell>
              </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
      
    </Container>
  );
}
