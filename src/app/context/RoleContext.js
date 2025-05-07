// "use client"; // For Next.js app directory

// import { createContext, useState, useContext, useEffect } from "react";

// const RoleContext = createContext();

// export const RoleProvider = ({ children }) => {
//   // const [role, setRole] = useState(() => localStorage.getItem("selectedRole"));
//   const [role, setRole] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("selectedRole") || null;
//     }
//     return null;
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedRole = localStorage.getItem("selectedRole");
//       if (savedRole) {
//         setRole(savedRole);
//       }
//     }
//   }, []);

//   const updateRole = (newRole) => {
//     // console.log("Updating role to:", newRole);
//     setRole(newRole);
//     localStorage.setItem("selectedRole", newRole);
//   };
//   return (
//     <RoleContext.Provider
//       value={{ role, setRole: updateRole, isLoggedIn, setIsLoggedIn }}
//     >
//       {children}
//     </RoleContext.Provider>
//   );
// };

// export const useRole = () => {
//   const context = useContext(RoleContext);
//   if (!context) {
//     throw new Error("useRole must be used within a RoleProvider");
//   }
//   return context;
// };


"use client";

import { createContext, useState, useContext, useEffect } from "react";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedRole") || "wholesaler"; // 👈 DEFAULT to wholesaler
    }
    return "wholesaler"; // fallback on server
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("selectedRole");
      if (!savedRole) {
        localStorage.setItem("selectedRole", "wholesaler");
        setRole("wholesaler");
      } else {
        setRole(savedRole);
      }
    }
  }, []);

  const updateRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("selectedRole", newRole);
  };

  return (
    <RoleContext.Provider
      value={{ role, setRole: updateRole, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};
