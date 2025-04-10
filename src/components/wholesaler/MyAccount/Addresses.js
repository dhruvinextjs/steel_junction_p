import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
import { Button } from "@/components/ui/button";

const Addresses = () => {
  const [editAddress, setEditAddress] = useState(false);
  const [editNewAddress, setEditNewAddress] = useState(false);

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <div className="space-y-4">
        <p className="text-xl text-[#25324B] font-semibold">Addresses</p>
        <div className="space-y-3">
          <RadioGroup defaultValue="option-one">
            <div className="border rounded-md border-[#E6E6E6] w-full p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <div className="w-[80%] font-medium">
                    <p>John wade</p>
                    <p>
                      SHREE BHAGWATI STEEL TRADERS, PLOT NO. 255, PHASE-2, GIDC,
                      DEDIYASAN, MEHSANA, GUJARAT, INDIA-10001.
                    </p>
                    <p>Phone: 9874561230</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Dialog open={editAddress}>
                    <DialogTrigger
                      onClick={(e) => setEditAddress(true)}
                      className=""
                    >
                      <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
                    </DialogTrigger>
                    <DialogContent
                      close={setEditAddress}
                      className="sm:max-w-[450px]"
                    >
                      <DialogTitle>Edit Address</DialogTitle>
                      <hr />
                      <EditAddress setEditAddress={setEditAddress} />
                    </DialogContent>
                  </Dialog>

                  <AiOutlineDelete className="text-[#FE3000] text-xl" />
                </div>
              </div>
            </div>
            <div className="border rounded-md border-[#E6E6E6] w-full p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <div className="w-[80%] font-medium">
                    <p>John wade</p>
                    <p>
                      SHREE BHAGWATI STEEL TRADERS, PLOT NO. 255, PHASE-2, GIDC,
                      DEDIYASAN, MEHSANA, GUJARAT, INDIA-10001.
                    </p>
                    <p>Phone: 9874561230</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
                  <AiOutlineDelete className="text-[#FE3000] text-xl" />
                </div>
              </div>
            </div>
          </RadioGroup>
          <Dialog open={editNewAddress}>
            <DialogTrigger
              onClick={(e) => setEditNewAddress(true)}
              className="focus:outline-none capitalize bg-[#000] p-3 rounded-md  hover:bg-[#3d3d3d] text-white font-medium  active:scale-90 transition text-sm"
            >
              + Add new Address
            </DialogTrigger>
            <DialogContent
              close={setEditNewAddress}
              className="sm:max-w-[450px]"
            >
              <DialogTitle>Add New Address</DialogTitle>
              <hr />
              <AddNewAdd setEditNewAddress={setEditNewAddress} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
