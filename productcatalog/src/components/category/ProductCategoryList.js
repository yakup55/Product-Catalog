import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categoryIdList } from "../../redux/actions/productActions";
import Product from "../product/Product";

export default function ProductCategoryList() {
  const { products } = useSelector((state) => state.product);
  const dispacth = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispacth(categoryIdList(id));
  }, []);
  return (
    <div>
      <Typography align="center" variant="h5" gutterBottom></Typography>

      <Grid container spacing={1}>
        {products?.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </Grid>

      <Typography align="center" variant="caption" display="block" gutterBottom>
        The number of products ({products.length}) has been listed.
      </Typography>
    </div>
  );
}
