import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../Actions/ProductAction";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomText from "../../../Components/CustomComponents/CustomText";
import Spacer from "../../../Components/CustomComponents/Spacer";
import { colors } from "../../../utils/Colors";

const AddProduct = () => {

  const dispatch = useDispatch()

  const [state, setState] = useState({
    name: "",
    purchasePrice: "",
    salePrice: "",
    stock: "",
  });

  const formArray = [
    {
      id: 1,
      name: "Name",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, name: v.target.value }),
    },
    {
      id: 1,
      name: "Purchase Price",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, purchasePrice: v.target.value }),
    },
    {
      id: 1,
      name: "Sale Price",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, salePrice: v.target.value }),
    },
    {
      id: 1,
      name: "Stock",
      xs: 12,
      md: 12,
      onchange: (v) => setState({ ...state, stock: v.target.value }),
    },
  ];
  // console.log(userData, "UserData")

  const { products } = useSelector((state) => state.productCreateReducer)
  
  console.log("productCreateReducer",products)
  // console.log("productCreateReducer",addedProduct)

  const onSubmit = () => {
    // console.log("Button Pressed");
    // const { onSubmit } = state;

    const userData = { ...state };

    createProduct(dispatch,userData)
    // try {
    //   dispatch({ type: 'PRODUCT_CREATE_REQUEST' });
  
    //   const data = userData
    //   dispatch({ type: 'PRODUCT_CREATE_SUCCESS', payload: data });
    //   console.log("CreatePost", data)
    // } catch (error) {}
    // onSubmit(userData);

    // e.preventDefault();
    // const postData = () => (
    //   state.name,
    //   state.purchasePrice,
    //   state.salePrice,
    //   state.stock,
    //   );
    // const postData = () => {
    //  state.name;
    // };
    // function postData() {
    //   state.name
    // }
    // console.log("postData", postData);
    // console.log("State", userData);
    // console.log("e.preventDefault()", e.preventDefault());
  };

  return (
    <div style={{ width: "auto", padding: 50 }}>
      <div
        style={{
          width: "auto",
          // padding: 40,
          paddingRight: 40,
          paddingLeft: 40,
          paddingBottom: 40,
          paddingTop: 20,
          //   color: colors.lightgray,
          // boxShadow: 10,
          borderRadius: 10,
          boxShadow: "0.5px 0.5px 10px #E5E5E7",
        }}
      >
        <CustomText title="ADD PRODUCT" fontSize={25} fontFamily={"medium"} />
        <Spacer height={20} />
        <Grid container spacing={2}>
          {formArray.map((items, index) => (
            <Grid key={index} item xs={items.xs} md={items.md}>
              <TextField
                onSubmit={() => {
                  onSubmit();
                  console.log("Presss");
                }}
                size="small"
                id="outlined-basic"
                label={items.name}
                //   variant="outlined"
                fullWidth
                onChange={items.onchange}
              ></TextField>
            </Grid>
          ))}
        </Grid>
        <Spacer height={20} />
        {/* <Button xs={{backgroundColor:colors.black, color:colors.lightRed}} >Submit</Button> */}
        <CustomButton
          title={"Submit"}
          backgroundColor={colors.black}
          color={colors.white1}
          width={60}
          height={30}
          justifyContent={"start"}
          alignItems={"center"}
          alignSelf={"center"}
          // onClick={() => {
          //   {
          //     onSubmit();
          //     console.log("ButtonState", state)
          //   }
          // }}
          onClick={
            // console.log("Clicked");
            // console.log("first");
            onSubmit
          }
        />
        {/* <div
          onClick={() => {
            console.log("firstssss");
            console.log("first");
          }}
        >
          Heeelo
        </div> */}
         {products.map((item) => (
          <div>
            {item.name}
            {item.purchasePrice}
          </div>
        ))} 
        {/* <div>
          {products.name}
        </div> */}
      </div>
    </div>
  );
};

export default AddProduct;
