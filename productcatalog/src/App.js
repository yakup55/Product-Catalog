import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import Category from "./components/category/Category";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import ProductBrand from "./components/product/ProductBrand";
import AdminCategoryList from "./Admin/category/AdminCategoryList";
import AdminAddCategory from "./Admin/category/AdminAddCategory";
import AdminUpdateCategory from "./Admin/category/AdminUpdateCategory";
import Error404 from "./components/error/Error404";
import AdminProductList from "./Admin/product/AdminProductList";
import AdminUpdateProduct from "./Admin/product/AdninUpdateProduct";
import SimpleSnacbar from "./components/snacbar/SimpleSnacbar";
import ProductDetail from "./components/product/ProductDetail";
import AdminProductAdd from "./Admin/product/AdminProductAdd";
import ProductBrandList from "./components/brand/ProductBrandList";
import ProductCategoryList from "./components/category/ProductCategoryList";
import User from "./User/user/User";
import OfferDetails from "./User/user/OfferDetails";
import AdminBrandAdd from "./Admin/brand/AdminBrandAdd";
import AdminBrandList from "./Admin/brand/AdminBrandList";
import AdminUpdateBrand from "./Admin/brand/AdminUpdateBrand";
import AdminColorAdd from "./Admin/color/AdminColorAdd";
import AdminColorList from "./Admin/color/AdminColorList";
import AdminUpdateColor from "./Admin/color/AdminUpdateColor";
import AdminOfferList from "./Admin/offer/AdminOfferList";
import AdminOfferAdd from "./Admin/offer/AdminOfferAdd";
import AdminUpdateOffer from "./Admin/offer/AdminUpdateOffer";
import AdminUsingStatusAdd from "./Admin/usingStatus/AdminUsingStatusAdd";
import AdminUsingStatusList from "./Admin/usingStatus/AdminUsingStatusList";
import AdminUpdateUsingStatus from "./Admin/usingStatus/AdminUpdateUsingStatus";
import Option from "./Admin/options/Option";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div id="content">
        <Routes>
          <Route path="/product" element={<ProductList></ProductList>}></Route>
          <Route
            path="/products/details/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/sigin" element={<Login></Login>}></Route>
          <Route path="/sinup" element={<Register></Register>}></Route>
          <Route
            path="/productbrandlist/:id"
            element={<ProductBrandList></ProductBrandList>}
          ></Route>
          <Route
            path="/productcategorylist/:id"
            element={<ProductCategoryList></ProductCategoryList>}
          ></Route>
          <Route
            path="/productbrands/list/:id"
            element={<ProductBrand></ProductBrand>}
          ></Route>

          {/* ADMIN CATEGORY */}
          <Route
            path="/admincategorylist"
            element={<AdminCategoryList></AdminCategoryList>}
          ></Route>
          <Route
            path="/adminaddcategory"
            element={<AdminAddCategory></AdminAddCategory>}
          ></Route>
          <Route
            path="/adminupdatecategory/:id"
            element={<AdminUpdateCategory></AdminUpdateCategory>}
          ></Route>

          {/* ADMIN PRODUCT */}
          <Route
            path="/adminproductlist"
            element={<AdminProductList></AdminProductList>}
          ></Route>
          <Route
            path="/adminaddproduct"
            element={<AdminProductAdd></AdminProductAdd>}
          ></Route>
          <Route
            path="/adminupdateproduct/:id"
            element={<AdminUpdateProduct></AdminUpdateProduct>}
          ></Route>
          {/* ADMIN BRAND */}
          <Route
            path="/adminbrandadd"
            element={<AdminBrandAdd></AdminBrandAdd>}
          ></Route>
          <Route
            path="/adminbrandlist"
            element={<AdminBrandList></AdminBrandList>}
          ></Route>
          <Route
            path="/adminupdatebrand/:id"
            element={<AdminUpdateBrand></AdminUpdateBrand>}
          ></Route>
          {/* ADMIN COLOR */}
          <Route
            path="/admincoloradd"
            element={<AdminColorAdd></AdminColorAdd>}
          ></Route>
          <Route
            path="/admincolorlist"
            element={<AdminColorList></AdminColorList>}
          ></Route>
          <Route
            path="/adminupdatecolor/:id"
            element={<AdminUpdateColor></AdminUpdateColor>}
          ></Route>
          {/* ADMIN OFFER */}
          <Route
            path="/adminofferlist"
            element={<AdminOfferList></AdminOfferList>}
          ></Route>
          <Route
            path="/adminofferadd"
            element={<AdminOfferAdd></AdminOfferAdd>}
          ></Route>
          <Route
            path="/adminupdateoffer/:id"
            element={<AdminUpdateOffer></AdminUpdateOffer>}
          ></Route>
          {/* ADMIN USIN STATUS */}
          <Route
            path="/adminusingstatusadd"
            element={<AdminUsingStatusAdd></AdminUsingStatusAdd>}
          ></Route>
          <Route
            path="/adminusingstatuslist"
            element={<AdminUsingStatusList></AdminUsingStatusList>}
          ></Route>
          <Route
            path="/adminupdateusingstatus/:id"
            element={<AdminUpdateUsingStatus></AdminUpdateUsingStatus>}
          ></Route>
          {/* OPTIONS */}
          <Route path="/admin" element={<Option></Option>}></Route>
          {/* ADMIN USER */}
          <Route
            path="/offerdetails/:id"
            element={<OfferDetails></OfferDetails>}
          ></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <SimpleSnacbar></SimpleSnacbar>
      </div>
    </>
  );
}

export default App;
