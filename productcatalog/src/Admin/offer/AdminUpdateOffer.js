import {
  Button,
  Container,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateOffer } from "../../redux/actions/offerActions";
import OfferService from "../../services/offerService";
import { validationSchema } from "../../components/product/validationSchema";
import { Stack } from "@mui/system";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import { getProductList } from "../../redux/actions/productActions";

export default function AdminUpdateOffer() {
  const { id } = useParams();
  const offerService = new OfferService();
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  console.log(user);
  useEffect(() => {
    offerService.getOneOffer(id).then((resp) => setValues(resp));
    dispacth(getProductList());
  }, []);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      offerPrice: 0,
      isAccepted: false,
      productId: 0,
      userId: user.userId,
      email: "bos@gmail.com",
    },
    onSubmit: (values) => {
      dispacth(updateOffer(id, values));
      dispacth(
        openSnacbar({
          message: `has been updated`,
          severity: "success",
        })
      );
      navigate("/adminofferlist");
    },
    validationSchema,
  });
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
            value={values.offerPrice}
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
          <TextField
            id="userId"
            name="userId"
            label="User Id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userId}
            error={errors.userId && touched.userId}
            helperText={errors.userId && touched.userId ? errors.userId : ""}
          ></TextField>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
