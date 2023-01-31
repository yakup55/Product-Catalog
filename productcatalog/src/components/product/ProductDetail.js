import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addToCart } from "../../redux/actions/cartActions";
import {
  getOneProductDetail,
  offerProductFalse,
  offerProductIsSoldFalse,
  offerProductIsSoldTrue,
  offerProductTrue,
} from "../../redux/actions/productActions";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { addOffer, deleteOffer } from "../../redux/actions/offerActions";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export default function ProductDetail() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        offerPrice: 0,
        isAccepted: false,
        productId: id,
        userId: user.userId,
        email: "bos@gmail.com",
      },
      onSubmit: (values) => {
        dispacth(addOffer(values));
        dispacth(offerProductFalse(id));
        dispacth(
          openSnacbar({
            message: `your bid amounts ${
              product?.productPrice -
              (product?.productPrice * values.offerPrice) / 100
            }`,
            severity: "success",
          })
        );
      //  navigate(`/products/details/${id}`);
      },
      validationSchema,
    });
  const handleAddToCart = (cartItem) => {
    dispacth(addToCart(cartItem));
    dispacth(offerProductIsSoldFalse(cartItem));
    dispacth(
      openSnacbar({
        message: "Purchased and Product offer false and  Product is sold true",
        severity: "success",
      })
    );
  };
  const handleOfferDeleted = (id) => {
    dispacth(deleteOffer(id));
    dispacth(offerProductIsSoldTrue(id));
    dispacth(offerProductTrue(id));
    dispacth(
      openSnacbar({
        message: "Teklif Silindi",
        severity: "success",
      })
    );

  };
  useEffect(() => {
    dispacth(getOneProductDetail(id));
  });
  return (
    <Container sx={{ mt: 3 }} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="h8">
              <h4 style={{ textAlign: "center" }}>
                {product.productDetail?.detailExplanation}
              </h4>
            </Typography>

            <img src={`${product.productImage}`} alt={product?.productName} />
            <Typography variant="h6">{product?.productName}</Typography>

            <form onSubmit={handleSubmit}>
              {product.productOffer === false && (
                <Typography>
                  <TextField
                    style={{ marginBottom: 15 }}
                    fullWidth
                    name="offerPrice"
                    id="offerPrice"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.offerPrice && touched.offerPrice}
                    helperText={
                      errors.offerPrice && touched.offerPrice
                        ? errors.offerPrice
                        : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PercentRoundedIcon></PercentRoundedIcon>
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <Button
                    style={{ margin: "auto", display: "block" }}
                    type="submit"
                    disabled
                    variant="contained"
                    color="success"
                  >
                    TEKLİF VERİLDİ
                  </Button>
                  <Button
                  onClick={()=>handleOfferDeleted(values.offerId)}
                  style={{ margin: "auto", display: "block",marginTop:5 }} variant="contained" color="error">Teklifi Sil</Button>
                </Typography>
              )}
              {product.productOffer === true && (
                <Typography>
                  <TextField
                    style={{ marginBottom: 15 }}
                    fullWidth
                    name="offerPrice"
                    id="offerPrice"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.offerPrice && touched.offerPrice}
                    helperText={
                      errors.offerPrice && touched.offerPrice
                        ? errors.offerPrice
                        : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PercentRoundedIcon></PercentRoundedIcon>
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <Button
                    style={{ margin: "auto", display: "block" }}
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    TEKLİF VER
                  </Button>
                </Typography>
              )}
            </form>
            <Typography align="center" variant="h6">
              Teklif Tutarı:
              {product?.productPrice -
                (product?.productPrice * values.offerPrice) / 100}{" "}
            </Typography>
          </Stack>
        </Grid>

        <Container maxWidth="sm">
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "red" }}>
                  <TableCell>Marka</TableCell>
                  <TableCell>Renk</TableCell>
                  <TableCell>Kategori</TableCell>
                  <TableCell>Durumu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{product.brand?.brandName}</TableCell>
                  <TableCell>{product.color?.colorName}</TableCell>
                  <TableCell>{product.category?.categoryName}</TableCell>
                  <TableCell>{product.usingStatus?.name}</TableCell>
                </TableRow>
              </Table>
            </TableBody>
            <Typography sx={{ color: "#f00", marginTop: 3 }} variant="h5">
              Ürün Fiyatı: {product?.productPrice} TL
            </Typography>
            {product.productIsSold === false && (
              <Typography style={{ marginTop: 30 }}>
                <Button
                startIcon={<ShoppingBasketIcon></ShoppingBasketIcon>}
                  disabled
                  onClick={() => handleAddToCart(product.productId)}
                  color="warning"
                  variant="contained"
                >
                  Satın Alındı
                </Button>
              </Typography>
            )}
            {product.productIsSold === true && (
              <Typography style={{ marginTop: 30 }}>
                <Button
                     startIcon={<ShoppingBasketIcon></ShoppingBasketIcon>}
                  onClick={() => handleAddToCart(product.productId)}
                  color="warning"
                  variant="contained"
                >
                  Satın Al
                </Button>
              </Typography>
            )}
          </TableContainer>
        </Container>
      </Grid>
    </Container>
  );
}
