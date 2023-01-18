import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { colors } from "../../utils/Colors";
import CustomText from "../CustomComponents/CustomText";

const NavbarMap = ({ item }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const boxStyle = {
    // height: "200px",
    // width: "200px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // fontSize: "30px",
    cursor: "pointer",
    // backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
    // color: isHover ? "red" : "purple",
    color: isHover ? "#DB8E72" : colors.black,
    backgroundColor:colors.white1,
    fontWeight: 700,
    borderBottomLeftRadius:50,
    borderTopLeftRadius:50,
    marginTop:20,
    fontSize:14
    // paddingBottom:50,
    // paddingTop:50
    // position:"absolute",
    // margin:-20,
    // width:40,
    // height:40,

  };
  const { toggleSidebar } = useProSidebar();

  //   const [isHover, setIsHover] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHover(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHover(false);
  //   };

  return (
    <div>
      {item.subMenu ? (
        <SubMenu
          label={item.menuItem.name}
          icon={item.menuItem.icon}
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.subMenu?.map((s, i) => (
            <MenuItem
              onClick={() => {
                window.innerWidth <= 450 ? toggleSidebar() : console.log("Yes");
              }}
              routerLink={<Link to={s.path} />}
              key={i}
            >
              {s.name}
            </MenuItem>
          ))}
        </SubMenu>
      ) : (
        <MenuItem
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            window.innerWidth <= 450 ? toggleSidebar() : console.log("Yes");
          }}
          routerLink={<Link to={item.menuItem.path} />}
          icon={item.menuItem.icon}
        >
          {item.menuItem.name}
        </MenuItem>
      )}
    </div>
  );
};

export default NavbarMap;
