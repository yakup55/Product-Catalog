import {
  Button,
  Container,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getBrandList } from "../../redux/actions/brandActions";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getColorList } from "../../redux/actions/colorActions";
import { updateProduct } from "../../redux/actions/productActions";
import { getUsingStatusList } from "../../redux/actions/usingStatusActions";
import ProductService from "../../services/productService";
import { validationSchema } from "./validationSchema";

export default function AdninUpdateProduct() {
  const productService = new ProductService();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colors } = useSelector((state) => state.color);
  const { brands } = useSelector((state) => state.brand);
  const { categories } = useSelector((state) => state.category);
  const { usings } = useSelector((state) => state.using);
  useEffect(() => {
    productService.getOneProduct(id).then((resp) => setValues(resp));
    dispatch(getColorList());
    dispatch(getBrandList());
    dispatch(getCategoryList());
    dispatch(getUsingStatusList());
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
      productName: "",
      productPrice: 0,
      productDescription: "",
      productImage: "",
      colorId: 0,
      categoryId: 0,
      brandId: 0,
      productOffer: false,
    },
    onSubmit: (values) => {
      dispatch(updateProduct(id, values));
      dispatch(
        openSnacbar({
          message: `${values.productName} has been updated`,
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
            value={values.productName}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productPrice}
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
            label="Product Description"
            value={values.productDescription}
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
          <img style={{width:100,height:100}} src={`${values.productImage}`}></img>
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
            value={values.categoryId}
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
            value={values.usingStatusId}
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
            Kaydet
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
