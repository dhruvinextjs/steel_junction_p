import { Button } from "@/components/ui/button";
import React from "react";
import Label from "@/components/ui/form/label";

const AddNewAdd = ({ setEditNewAddress }) => {
  return (
    <>
      <form className="space-y-4">
        <div className="w-full space-y-1 text-left">
          <Label htmlFor="first_name" text="Your Name" />
          <input
            type="text"
            name="first_name"
            className="input_field"
            placeholder="Enter First Name"
            // defaultValue={user.first_name}
            // key={user.first_name}
            // disabled
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <Label htmlFor="email" text="Mobile Number" />
          <input
            type="text"
            name="text"
            className="input_field"
            placeholder="490"
            // defaultValue={user.email}
            // key={user.email}
            // disabled
          />
        </div>
        <div className="w-full space-y-1 text-left">
          <Label htmlFor="email" text="Address" />
          <textarea rows={4} className="input_field" />
        </div>
      </form>
      <div className="flex items-center gap-3">
        <Button variant="primary" className="w-auto">
          Add
        </Button>
        <Button
          variant="disable"
          className=""
          onClick={(e) => setEditNewAddress(false)}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default AddNewAdd;
