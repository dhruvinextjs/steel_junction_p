"use client";

import React, { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext";
import Home from "../wholesaler/page";
import RetailerHome from "../retailer/page";

const Dashboard = () => {
  const { role: roleFromContext } = useRole(); // Assuming useRole is a client-side hook
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (roleFromContext) {
      setRole(roleFromContext);
    }
  }, [roleFromContext]);

  if (role === null) {
    return <div>Loading...</div>; // Render loading until role is determined
  }

  return <div>{role === "wholesaler" ? <Home /> : <RetailerHome />}</div>;
};

export default Dashboard;
