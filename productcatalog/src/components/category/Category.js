import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBrandList } from "../../redux/actions/brandActions";
import { useNavigate, useParams } from "react-router-dom";
import { brandIdList } from "../../redux/actions/productActions";
import { openSnacbar } from "../../redux/actions/appActions";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { getCategoryList } from "../../redux/actions/categoryActions";
import {categoryIdList} from "../../redux/actions/productActions"
export default function Brand() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getCategoryList());
  }, []);
  const categoryIdList = (id) => {
    dispacth(categoryIdList(id));
    dispacth(
      openSnacbar({
        message: "başarılı",
        severity: "success",
      })
    );
    navigate(`/product/${id}`)
  };

  const { categories } = useSelector((state) => state.category);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Kategoriler</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {categories.map((category) => (
          <FormControlLabel
          onClick={()=>navigate(`/productcategorylist/${category.categoryId}`)}
            value={category.categoryName}
            control={<Radio />}
            label={category.categoryName}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
