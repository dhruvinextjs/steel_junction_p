"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { IoChatboxEllipsesOutline, IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import Picture from "@/components/ui/picture";
import { AiOutlineClose } from "react-icons/ai";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRole } from "@/app/context/RoleContext";
import { useRouter } from "nextjs-toploader/app";
import { useDispatch, useSelector } from "react-redux";

import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { PiNoteDuotone } from "react-icons/pi";
import { GrDocumentPdf } from "react-icons/gr";
import { handleLogout } from "@/redux/AuthSlice";
import toast from "react-hot-toast";
import {
  handleChangeSearchParams,
  handleClearProductName,
  handleSearchProduct,
} from "@/redux/ProductSlice";
import ChatsSection from "./Chats";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { role, setRole } = useRole(); // Access role and setRole from context
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); // To store search input
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { searchResults, loading } = useSelector((state) => state.getProduct);
  const [pdfUrl, setPdfUrl] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value.trim().length > 0) {
        dispatch(handleSearchProduct(value)); // Trigger API call
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false); // Hide dropdown
      }
    }, 300), // 300ms debounce
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update local input state
    debouncedSearch(value); // Call debounced search
  };

  // Handle product selection from suggestions
  const handleProductClick = (_id, product) => {
    if (!product) {
      console.error("Product is undefined");
      return;
    }
    setSearchQuery(product.name); // Set the selected product name in the input field
    setShowSuggestions(false); // Hide dropdown
    router.push(`/product-details/${_id}`); // Redirect to product details page
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    router.push(`/${newRole}`);
  };
  useEffect(() => {
    if (!role) {
      const storedRole = localStorage.getItem("selectedRole");
      if (storedRole) {
        setRole(storedRole);
      }
    }
  }, [role, setRole]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function hanldeLogoutFn() {
    if (!window.confirm("are you sure")) return;
    toast.loading("Logout...");
    // toast.remove();
    setTimeout(() => {
      dispatch(handleLogout());
      // toast.success("Logout Successfull");
      router.push("/");
      toast.remove();
    }, 1000);
  }

  useEffect(() => {
    // Fetch product PDF URL from the API
    fetch("https://steel-junction.onrender.com/api/config")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          const pdfFileName = data.data[0].productPdf; // Get PDF file name
          const fullPdfUrl = `https://steel-junction.onrender.com/uploads/${pdfFileName}`;
          setPdfUrl(fullPdfUrl); // Save full PDF URL
        }
      })
      .catch((error) => console.error("Error fetching PDF:", error));
  }, []);

  const handleDownloadClick = () => {
    if (!pdfUrl) {
      alert("PDF file not available");
      return;
    }
    window.open(pdfUrl, "_blank"); // Open PDF in new tab
  };

  return (
    <div
      className={`bg-white duration-300 transition-all text-black w-full ${
        sticky &&
        "z-50 top-0 duration-300 w-full transition-all fixed shadow-2xl"
      }`}
    >
      {/* mobile header start */}
      <div
        className={`xl:hidden bg-white space-y-5  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-linear`}
      >
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="flex items-center gap-3">
            <Picture
              src={"/static/images/Logo (1).png"}
              alt="logo"
              width={35}
              height={35}
              className=""
            />
            <p className="text-[#FC342A] font-bold md:text-3xl text-lg">
              Steel <span className="text-primary_color">Junction</span>
            </p>
          </Link>

          <div>
            <AiOutlineClose
              className="ml-auto text-2xl cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>

        <div className="px-10 space-y-3 text-left">
          <hr />
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setOpenSidebar(false)}
                >
                  <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
                  <p>Chat</p>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="flex items-center justify-center py-6 text-white bg-primary_color">
                  <SheetTitle>Chats</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <hr />
          <div>
            {user !== null ? (
              <Link href="/my-account">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
                  <p>My Account</p>
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
                  <p>Sign In</p>
                </div>
              </Link>
            )}
          </div>
          <hr />
          {/* {user === null ? (
            ) : (
              <Link href="/my-account">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
                  <p>My Acount</p>
                </div>
              </Link>
            )} */}
        </div>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="xl:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="xl:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
        ></div>
      )}
      {/* mobile header end */}
      <div
        className="container mx-auto xl:flex xl:justify-between md:items-center"
        id="topMenu"
      >
        <div className="flex items-center justify-between py-2 md:gap-6">
          <div className="flex flex-col items-center w-full gap-2 md:flex-row md:gap-6">
            <div className="flex items-center justify-between w-full xl:w-auto">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  if (role) {
                    router.push(`/${role}`); // Redirect to the home page based on the role
                  } else {
                    router.push("/"); // Default to the main home page if no role is set
                  }
                }}
              >
                <Picture
                  src={"/static/images/Logo (1).png"}
                  alt="logo"
                  width={35}
                  height={35}
                  className=""
                />
                <p className="text-[#FC342A] font-bold md:text-3xl text-lg">
                  Steel <span className="text-primary_color">Junction</span>
                </p>
              </div>
              <div className="block xl:hidden">
                <Select
                  onValueChange={handleRoleChange}
                  value={role || "select Role"}
                >
                  <SelectTrigger className="w-[120px] focus:outline-none capitalize bg-[#FC342A] hover:bg-[#000] text-white font-medium active:scale-90 outline transition text-sm">
                    <SelectValue placeholder="select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="block pl-2 xl:hidden">
                <BiMenuAltRight
                  className="text-2xl cursor-pointer text-primary_color"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
            </div>
            {user && (
              <div className="w-full md:w-auto rounded-md flex items-center md:px-4 px-2 py-2 gap-2 space-y-1 text-left bg-[#F3F6FA]">
                <IoSearchSharp className="text-2xl text-[#5E5E6D]" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full bg-[#F3F6FA] outline-none"
                  placeholder="Search for items..."
                  pattern="[A-Za-z]{4,18}"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  // required
                />
                {showSuggestions && searchResults.length > 0 && (
                  <ul className="absolute z-20 transition-all border origin-top bg-white min-w-[25vw] text-left ease-in-out duration-300 top-16  p-3 max-h-72 overflow-y-auto  rounded-2xl shadow-2xl text-textColor space-y-2">
                    {loading ? (
                      <li className="p-2 text-gray-500">Loading...</li>
                    ) : (
                      searchResults.map((product) => (
                        <li
                          key={product._id}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            handleProductClick(product._id, product);
                            setTimeout(() => {
                              dispatch(handleClearProductName([]));
                              dispatch(handleChangeSearchParams({ product }));
                            }, 0);
                          }}
                        >
                          {product.name}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Select onValueChange={handleRoleChange} value={role || ""}>
                  <SelectTrigger className="w-[150px] focus:outline-none capitalize bg-[#FC342A] hover:bg-[#000] text-white font-medium active:scale-90 outline transition text-sm">
                    <SelectValue placeholder="select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                  </SelectContent>
                </Select>
                {role === "wholesaler" && (
                  <div className="flex items-center gap-6">
                    <Link href="/wishlist">
                      <div className="flex items-center gap-2">
                        <FaRegHeart className="text-xl text-[#5E5E6D]" />
                        <p>Wishlist</p>
                      </div>
                    </Link>
                    <Link href="/shopping-cart">
                      <div className="flex items-center gap-2">
                        <HiOutlineShoppingCart className="text-xl text-[#5E5E6D]" />
                        <p>Cart</p>
                      </div>
                    </Link>
                  </div>
                )}
                {role === "retailer" && (
                  <div className="flex items-center gap-6">
                    <ChatsSection />
                  </div>
                )}
                <div className="relative z-10 flex flex-row items-center justify-center gap-1 cursor-pointer group ">
                  <div className="flex items-center gap-2">
                    <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
                    <p>My Account</p>
                    <FaChevronDown
                      className={`ml-auto min-h-4 min-w-[1rem] group-hover:mb-0 duration-300 group-hover:rotate-180 transition-all `}
                    />
                  </div>
                  {role === "wholesaler" && (
                    <div className="absolute overflow-y-auto z-10 min-w-[11rem] group-hover:scale-100 scale-0 custom_scrollbar transition-all origin-top  bg-white text-left ease-in-out duration-300 top-9 -left-8 rounded-lg shadow-2xl text-textColor">
                      <ul className="max-h-full overflow-y-auto tracking-wide">
                        <Link href="/my-account">
                          <li className="hover:bg-[#F5F5F5] flex items-center gap-2 text-base py-2 px-3">
                            <CgProfile className="text-lg" />
                            Profile
                          </li>
                        </Link>
                        <li className="hover:bg-[#F5F5F5] text-base flex items-center gap-2 py-2 px-3">
                          <PiNoteDuotone className="text-lg" />
                          My Orders
                        </li>
                        <li
                          className="hover:bg-[#F5F5F5] text-[#F10000] text-base flex items-center gap-2 py-2 px-3"
                          onClick={() => hanldeLogoutFn()}
                        >
                          <LuLogOut className="text-lg" />
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                  {role === "retailer" && (
                    <div className="absolute overflow-y-auto z-10 min-w-[11rem] group-hover:scale-100 scale-0 custom_scrollbar transition-all origin-top  bg-white text-left ease-in-out duration-300 top-9 -left-28 rounded-lg shadow-2xl text-textColor">
                      <ul className="max-h-full overflow-y-auto tracking-wide">
                        <Link href="/my-account">
                          <li className="hover:bg-[#F5F5F5] flex items-center gap-2 text-base py-2 px-3">
                            <CgProfile className="text-lg" />
                            Profile
                          </li>
                        </Link>
                        <>
                          <Link href="/retailer/products">
                            <li className="hover:bg-[#F5F5F5] text-base flex items-center gap-2 py-2 px-3">
                              <PiNoteDuotone className="text-lg" />
                              All Product Details
                            </li>
                          </Link>
                          <li
                            className="hover:bg-[#F5F5F5] text-base flex items-center gap-2 py-2 px-3"
                            onClick={handleDownloadClick}
                          >
                            <GrDocumentPdf className="text-lg" />
                            Download Products PDF
                          </li>
                        </>
                        <li
                          className="hover:bg-[#F5F5F5] text-[#F10000] text-base flex items-center gap-2 py-2 px-3"
                          onClick={() => hanldeLogoutFn()}
                        >
                          <LuLogOut className="text-lg" />
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link href="/login">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
                  <p>Sign In</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
