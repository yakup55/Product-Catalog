import { Grid, GridItem } from "@chakra-ui/react";
import {
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import {
  getProductList,
} from "../../redux/actions/productActions";
export default function ProductList() {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getProductList());
  }, []);
  const { products } = useSelector((state) => state.product);
  return (
    <div>
      <Grid
        h="150"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={20}
      >
        <GridItem rowSpan={6} colSpan={0}></GridItem>
        {products?.map((product) => (
          <GridItem colSpan={1}>
            <Product key={product.productId} product={product} />
          </GridItem>
        ))}
        <GridItem colSpan={0}>
          <Typography
            align="center"
            variant="caption"
            display="block"
            gutterBottom
          >
            The number of products ({products.length}) has been listed.
          </Typography>
          <h4 style={{ textAlign: "right" }}> </h4>
        </GridItem>
      </Grid>
    </div>
  );
}
