import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addOffer } from "../../redux/actions/offerActions";
import { validationSchema } from "../../components/product/validationSchema";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import { getProductList } from "../../redux/actions/productActions";
export default function AdminOfferAdd() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        offerPrice: 0,
        isAccepted: false,
        productId: 0,
        userId: user.userId,
        email: "bos@gmail.com",
      },
      onSubmit: (values) => {
        dispacth(addOffer(values));
        dispacth(
          openSnacbar({
            message: "hass been created",
            severity: "success",
          })
        );
        navigate("/adminofferlist");
      },
      validationSchema,
    });
  useEffect(() => {
    dispacth(getProductList());
  }, []);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            name="offerPrice"
            id="offerPrice"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.offerPrice && touched.offerPrice}
            helperText={
              errors.offerPrice && touched.offerPrice ? errors.offerPrice : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PercentRoundedIcon></PercentRoundedIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            select
            label="Select your Product"
            defaultValue="Select Product"
            value={values.productId}
            id="productId"
            name="productId"
            helperText={
              errors.productId && touched.productId ? errors.productId : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productId && touched.productId}
          >
            {products.map((product) => (
              <MenuItem key={product.productId} value={product.productId}>
                {product.productName}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained">
            Add Offer
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
