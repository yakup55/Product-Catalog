import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBrandList } from "../../redux/actions/brandActions";
import { addProduct, getProductList } from "../../redux/actions/productActions";
import { getColorList } from "../../redux/actions/colorActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getUsingStatusList } from "../../redux/actions/usingStatusActions";
export default function AdminProductAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colors } = useSelector((state) => state.color);
  const { brands } = useSelector((state) => state.brand);
  const { categories } = useSelector((state) => state.category);
  const { usings } = useSelector((state) => state.using);
  const { user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.product);
  console.log(user.userId);
  const fileValid = (file) => {
    if (
      file.type.match("image/jpeg") ||
      file.type.match("image/jpg") ||
      (file.type.match("image/png") && file.size < 409600)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  useEffect(() => {
    dispatch(getColorList());
    dispatch(getBrandList());
    dispatch(getCategoryList());
    dispatch(getUsingStatusList());
  }, []);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        productName: "",
        productPrice: 0,
        productDescription: "",
        productImage: "",
        colorId: 0,
        categoryId: 0,
        brandId: 0,
        productOffer: false,
        userId: user.userId,
        usingStatusId: 0,
      },
      onSubmit: (values) => {
        dispatch(addProduct(values));
        dispatch(
          openSnacbar({
            message: `${values.productName} has been created`,
            severity: "success",
          })
        );

        navigate("/adminproductlist");
      },
      validationSchema,
    });
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="productName"
            name="productName"
            label="Product Name"
            placeholder="Product Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productName && touched.productName}
            helperText={
              errors.productName && touched.productName
                ? errors.productName
                : ""
            }
          ></TextField>
          <TextField
            id="productPrice"
            name="productPrice"
            label="Product Price"
            placeholder="Product Price"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productPrice && touched.productPrice}
            helperText={
              errors.productPrice && touched.productPrice
                ? errors.productPrice
                : ""
            }
          ></TextField>
          <TextField
            id="productDescription"
            name="productDescription"
            placeholder="Product Description"
            label="Product Description"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productDescription && touched.productDescription}
            helperText={
              errors.productDescription && touched.productDescription
                ? errors.productDescription
                : ""
            }
          ></TextField>
          <TextField
            type="file"
            id="productImage"
            name="productImage"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productImage && touched.productImage}
            helperText={
              errors.productImage && touched.productImage
                ? errors.productImage
                : ""
            }
          ></TextField>
          <img
            src={`${values.productImage}`}
            style={{ width: 100, height: 100 }}
          ></img>
          <TextField
            select
            label="Select your color"
            defaultValue="Select Color"
            value={values.colorId}
            id="colorId"
            name="colorId"
            helperText={errors.colorId && touched.colorId ? errors.colorId : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.colorId && touched.colorId}
          >
            {colors.map((color) => (
              <MenuItem key={color.colorId} value={color.colorId}>
                {color.colorName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select your brand"
            value={values.brandId}
            id="brandId"
            name="brandId"
            helperText={errors.brandId && touched.brandId ? errors.brandId : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.brandId && touched.brandId}
          >
            {brands.map((brand) => (
              <MenuItem key={brand.brandId} value={brand.brandId}>
                {brand.brandName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="categoryId"
            name="categoryId"
            label="Select your category"
            select
            error={errors.categoryId && touched.categoryId}
            helperText={
              errors.categoryId && touched.categoryId ? errors.categoryId : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categoryName}
          >
            {categories.map((category) => (
              <MenuItem key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="usingStatusId"
            name="usingStatusId"
            label="Select your using status"
            select
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.usingStatusId && touched.usingStatusId}
            helperText={
              errors.usingStatusId && touched.usingStatusId
                ? errors.usingStatusId
                : ""
            }
            value={values.name}
          >
            {usings.map((using) => (
              <MenuItem key={using.usingStatusId} value={using.usingStatusId}>
                {using.name}
              </MenuItem>
            ))}
          </TextField>
          <Typography>Teklif Durumu</Typography>
          <Switch
            name="productOffer"
            id="productOffer"
            value={values.productOffer}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productOffer && touched.productOffer}
            helperText={
              errors.productOffer && touched.productOffer
                ? errors.productOffer
                : ""
            }
          ></Switch>

          <Button type="submit" variant="contained">
            Ekle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
