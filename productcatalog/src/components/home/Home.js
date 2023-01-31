import {
  Grid,
  GridItem,
} from "@chakra-ui/react";

import React from "react";
import Brand from "../brand/Brand";
import Category from "../category/Category";
import ProductList from "../product/ProductList";

export default function Home() {
  return (
    <Grid
      h="1000"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={60}
    >
      <GridItem rowSpan={6} colSpan={0}>
        <Brand></Brand>
        <div style={{ marginTop: 40 }}>
          <Category></Category>
        </div>
      </GridItem>
      <GridItem colSpan={0}>
        <ProductList></ProductList>
      </GridItem>
    </Grid>
  );
}
