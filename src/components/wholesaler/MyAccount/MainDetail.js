import React from "react";
import Profile from ".";
import Addresses from "./Addresses";
import ChangePassCode from "./ChangePassCode";
import GstDetails from "./GstDetails";
import MyOrders from "./MyOrders";
 
 
const MainDetail = ({ tabMenu, ...props }) => {
  return (
    <>
      <>
        {tabMenu === "Profile" ? (
          <Profile {...props} />
        ) : tabMenu === "My Orders" ? (
          <MyOrders {...props}/>
        ) : tabMenu === "Addresses" ? (
          <Addresses {...props} />
        // ) : tabMenu === "Card" ? (
        //   <MyCard {...props} />
        // ) : tabMenu === "Payment" ? (
        //   <Payment {...props} />
        )  : tabMenu === "GST Details"  ? (
          <GstDetails {...props} />
        ) : tabMenu === "Change Password" ? (
          <ChangePassCode {...props} />
        )  : null}
      </>
    </>
  );
};
 
export default MainDetail;