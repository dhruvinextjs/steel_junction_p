import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { TfiWallet } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { RiLock2Line } from "react-icons/ri";
import { handleLogout } from "@/redux/AuthSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useRouter } from "nextjs-toploader/app";
import { useRole } from "@/app/context/RoleContext";

const MainMenu = ({ onTabChange, tabMenu }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { role } = useRole();

  function hanldeLogoutFn() {
    if (!window.confirm("are you sure")) return;
    toast.loading("Logout...");
    toast.remove();
    toast.success("Logout Successfull");
    setTimeout(() => {
      dispatch(handleLogout());
      router.push("/");
      toast.remove();
    }, 1000);
  }

  return (
    <div className="px-2 py-3 space-y-2 xl:py-5 xl:px-4">
      <p className="text-xl text-[#25324B] font-semibold title heading mb-5">
        My Account
      </p>
      {tabMenu === "Profile" ? (
        <div className="bg-[#E9F0F7]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Profile")}
          >
            <FaRegUserCircle className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Profile
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#E9F0F7] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Profile")}
          >
            <FaRegUserCircle className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Profile
            </p>
          </div>
        </div>
      )}
      {role === "wholesaler" && (
        <>
          {tabMenu === "My Orders" ? (
            <div className="bg-[#E9F0F7]  text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("My Orders")}
              >
                <TbCalendarStats className="text-xl" />
                <p className="text-[15px] font-semibold text-primary_color">
                  My Orders
                </p>
              </div>
            </div>
          ) : (
            <div className="hover:bg-[#E9F0F7] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("My Orders")}
              >
                <TbCalendarStats className="text-xl" />
                <p className="text-[15px] font-medium text-black hover:text-primary_color">
                  My Orders
                </p>
              </div>
            </div>
          )}
          {tabMenu === "Addresses" ? (
            <div className="bg-[#E9F0F7]  text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("Addresses")}
              >
                <FaRegCreditCard className="text-xl" />
                <p className="text-[15px] font-semibold text-primary_color">
                  My Addresses
                </p>
              </div>
            </div>
          ) : (
            <div className="hover:bg-[#E9F0F7] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("Addresses")}
              >
                <FaRegCreditCard className="text-xl" />
                <p className="text-[15px] font-medium text-black hover:text-primary_color">
                  My Addresses
                </p>
              </div>
            </div>
          )}
          {tabMenu === "GST Details" ? (
            <div className="bg-[#E9F0F7]  text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("GST Details")}
              >
                <TfiWallet className="text-xl" />
                <p className="text-[15px] font-semibold text-primary_color">
                  GST Details
                </p>
              </div>
            </div>
          ) : (
            <div className="hover:bg-[#E9F0F7] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
              <div
                className="flex items-center gap-4 py-1 xl:py-3 "
                onClick={() => onTabChange("GST Details")}
              >
                <TfiWallet className="text-xl" />
                <p className="text-[15px] font-medium text-black hover:text-primary_color">
                  GST Details
                </p>
              </div>
            </div>
          )}
        </>
      )}
      {tabMenu === "Change Password" ? (
        <div className="bg-[#E9F0F7]  text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Change Password")}
          >
            <RiLock2Line className="text-xl" />
            <p className="text-[15px] font-semibold text-primary_color">
              Change Passcode
            </p>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[#E9F0F7] hover:text-primary_color xl:px-4 px-2 cursor-pointer">
          <div
            className="flex items-center gap-4 py-1 xl:py-3 "
            onClick={() => onTabChange("Change Password")}
          >
            <RiLock2Line className="text-xl" />
            <p className="text-[15px] font-medium text-black hover:text-primary_color">
              Change Passcode
            </p>
          </div>
        </div>
      )}
      <div
        className="px-2 py-1 cursor-pointer xl:px-4 xl:py-3"
        // onClick={() => setOpenModal(true)}
      >
        <div
          className="flex items-center gap-3 "
          onClick={() => hanldeLogoutFn()}
        >
          <FiLogOut className="text-xl text-[#F10000]" />
          <p className="text-[15px] text-[#F10000] ">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
