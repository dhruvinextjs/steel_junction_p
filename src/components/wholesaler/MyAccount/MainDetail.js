import React from "react";
import Profile from ".";
import Addresses from "./Addresses";
import ChangePassCode from "./ChangePassCode";


const MainDetail = ({ tabMenu, ...props }) => {
  return (
    <>
      <>
        {tabMenu === "Profile" ? (
          <Profile {...props} />
        ) : tabMenu === "Addresses" ? (
          <Addresses {...props} />
        // ) : tabMenu === "Card" ? (
        //   <MyCard {...props} />
        // ) : tabMenu === "Payment" ? (
        //   <Payment {...props} />
        ) : tabMenu === "Change Password" ? (
          <ChangePassCode {...props} />
        ) : null}
      </>
    </>
  );
};

export default MainDetail;
