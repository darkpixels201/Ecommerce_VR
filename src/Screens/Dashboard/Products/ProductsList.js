import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import productListArray from "../../../Components/ProductListArray";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { colors } from "../../../utils/Colors";
import CustomButtonHeader from "../../../Components/CustomComponents/CustomButtonHeader";
import { makeStyles, withStyles } from "@mui/styles";
import CustomText from "../../../Components/CustomComponents/CustomText";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomSearchFilter from "../../../Components/CustomComponents/CustomSearchFilter";
import "../../../Assets/css/font.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Actions/ProductAction";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../../../Constant/ProductConstant";
import productListArray from "../../../Components/ProductListArray";
// import MuiTableCell from "@material-ui/core/TableCell";
// import { withStyles } from "@mui/material";

// const TableCells = withStyles({
//   root: {
//     borderBottom: "none",
//     color:"green",
//   }
// })(TableCell);

const ProductTableCell = [
  { id: 1, name: "#" },
  { id: 1, name: "Image" },
  { id: 1, name: "Name" },
  { id: 1, name: "Status 1" },
  { id: 1, name: "Status 2" },
  // { id: 1, name: "Purchase Price" },
  // { id: 1, name: "Status" },
  // { id: 1, name: "Delete" },
  // { id: 1, name: "Edit" },
  // { id: 1, name: "View" },
];

const useStyles = makeStyles({
  root: {
    borderBottom: "none",
  },
});

const ProductsList = () => {
  const eduArray = [
    {
      id: 1,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 2,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 3,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 4,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
    {
      id: 5,
      name: "<educator name> uploaded new micro-course for approval and edits view here",
    },
  ];
  return (
    <div
      style={{
        width: "auto",
        alignSelf: "center",
        padding: 30,
      }}
    >

      <TableContainer
        sx={{
          // border: "solid",
          // borderWidth: 0.5,
          borderTop: 0,
          color: colors.lightgray,
          boxShadow: "10",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderRadius: 5,
        }}
        // component={Paper}
        style={{}}
      >
        {/* <CustomButtonHeader /> */}
        <Table aria-label="simple table">
          <TableHead
            sx={{
              background: "linear-gradient(to right,#9cbefe, #f4f4f4)",
              boxShadow: "0.5px 0.5px 10px #6b9efd",
            }}
          >
            <TableRow sx={{ height: 5 }}>
              {ProductTableCell.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{ borderBottom: "none", fontFamily: "bold" }}
                  align="center"
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {/* {products.map((item) => (<div>{item.name}</div>))} */}
            {eduArray.map((item, index) => (
              <TableRow key={item.name} hover>
                {/* <TableCell
                  sx={{ borderBottom: "none" }}
                  component="th"
                  scope="row"
                >
                  {item.id}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.image}
                </TableCell> */}
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.id}
                </TableCell>
                <TableCell sx={{ borderBottom: "none", backgroundColor:"red",  }} align="center">
                  {<div
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: "lightgrey",
                  borderRadius: 50,
                  display:"flex",
                  alignItems:"center",
                  alignSelf:"center", justifyContent:"center"
                }}
              ></div>}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.name}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.stock}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Status"}
                </TableCell>
                {/* <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Delete"}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Edit"}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"View"}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {/* {products.map((item) => (
          <div>
            {item.name}

          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ProductsList;

// {productListArray.map((item, index) => (
//   <div key={index} >
//     <Link to={`${item.id}`} >
//     {item.name}
//     </Link>
//   </div>
// ))}
