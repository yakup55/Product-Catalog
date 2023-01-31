import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addToCart } from "../../redux/actions/cartActions";
import { offerProductIsSoldFalse } from "../../redux/actions/productActions";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export default function Product({ product }) {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handleAddToCart = (cartItem) => {
    dispacth(addToCart(cartItem));
    dispacth(offerProductIsSoldFalse(cartItem));
    dispacth(
      openSnacbar({
        message: "Purchased and Product offer false and  Product is sold true",
        severity: "success",
      })
    );
    navigate("/");
  };
  return (
    <Grid item xs={7} md={3}>
      <Card sx={{ width: 300, height: 600, mb: 5 }}>
        <CardHeader />
        <CardMedia
          component="img"
          height="300"
          onClick={() => navigate(`/products/details/${product.productId}`)}
          image={`${product?.productImage}`}
          alt={product?.productName}
        />

        <CardContent>
          <Typography paragraph>
            {product?.productName.substring(0, 56)}...
          </Typography>
          <Typography paragraph>{product?.productPrice}TL</Typography>
        </CardContent>
        {product.productIsSold === true && (
          <Typography align="center">
            <Button
            startIcon={<ShoppingBasketIcon></ShoppingBasketIcon>}
              color="warning"
              variant="contained"
              onClick={() => handleAddToCart(product.productId)}
            >
              Satın Al
            </Button>
          </Typography>
        )}
        {product.productIsSold === false && (
          <Typography align="center">
            <Button
            startIcon={<ShoppingBasketIcon></ShoppingBasketIcon>}
              disabled
              color="warning"
              variant="contained"
              onClick={() => handleAddToCart(product.productId)}
            >
              Satın Alındı
            </Button>
          </Typography>
        )}
      </Card>
    </Grid>
  );
}
