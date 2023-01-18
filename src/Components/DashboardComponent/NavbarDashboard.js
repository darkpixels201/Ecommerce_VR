import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import { FaProductHunt } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { TbReport, TbStack2, TbDiscount } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoReceiptOutline } from "react-icons/io5";
import { BsReceiptCutoff } from "react-icons/bs";
import NavbarMap from "./NavbarMap";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";
import { colors } from "../../utils/Colors";

const NavbarDashboard = () => {
  const menu = [
    {
      id: 1,
      menuItem: {
        name: "Dashboard",
        path: "",
        icon: <RiProductHuntLine size={23} />,
      },
      // subMenu: [
      //   { name: "Products", path: "/dashboard/products" },
      //   { name: "Add Products", path: "/dashboard/addproduct" },
      // ],
    },
    {
      id: 2,
      menuItem: {
        name: "Microcourses approval",
        path: "/dashboard/order",
        icon: <BsReceiptCutoff size={23} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Educators",
        path: "/dashboard/stock",
        icon: <TbStack2 size={23} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Payments",
        path: "/dashboard/stock",
        icon: <TbStack2 size={23} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Live and trending microcourses",
        path: "/dashboard/stock",
        icon: <TbStack2 size={23} />,
      },
    },
  ];

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
    // color: isHover ? "black" : "white",
    // backgroundColor:colors.white1,
  };
  const { toggleSidebar } = useProSidebar();

  return (
    <div>
      <Sidebar
        backgroundColor="#503E9D"
        style={{ height: window.innerWidth<=480?"100vh":"90vh", minHeight: "90vh", borderRightWidth: 0 }}
        // rootStyles={{
        //   height:"60vh"
        //     // "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
        // }}
        breakPoint={window.innerWidth <= 450 ? "always" : null}
        defaultCollapsed={SubMenu ? false : true}
      >
        <Spacer height={20} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText title="APP LOGO" color={colors.white1} fontWeight={800} fontSize={27} />
        </div>
        <Spacer height={50} />

        <Menu
          style={boxStyle}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {menu.map((item, index) => (
            <NavbarMap
              key={index}
              item={item}
              // isHover={isHover}
              // handleMouseEnter={handleMouseEnter}
              // handleMouseLeave={handleMouseLeave}
            />
          ))}
        </Menu>
      </Sidebar>
      {/* <Sidebar
        rootStyles={{
          background: "red",
        }}
      >
        <Menu>
          {menu.map((item, index) => (
            <div key={index}>
              {item.subMenu ? (
                <SubMenu label={item.menuItem.name}>
                  {item.subMenu?.map((s, i) => (
                    <MenuItem routerLink={<Link to={s.path} />} key={i}>
                      {s.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem routerLink={<Link to={item.menuItem.path} />}>
                  {item.menuItem.name}
                </MenuItem>
              )}
            </div>
          ))}
        </Menu>
      </Sidebar> */}
    </div>
  );
};

export default NavbarDashboard;
