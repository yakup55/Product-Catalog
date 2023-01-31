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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
export default function Brand() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getBrandList());
  }, []);
  const brandList = (id) => {
    dispacth(brandIdList(id));
    dispacth(
      openSnacbar({
        message: "başarılı",
        severity: "success",
      })
    );
  };

  const { brands } = useSelector((state) => state.brand);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Markalar</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {brands.map((brand) => (
          <FormControlLabel
            onClick={() => navigate(`/productbrandlist/${brand.brandId}`)}
            value={brand.brandName}
            control={<Radio />}
            label={brand.brandName}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
