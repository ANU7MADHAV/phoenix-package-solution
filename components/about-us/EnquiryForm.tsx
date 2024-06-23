import React from "react";

const EnquiryForm = () => {
  return (
    <div className="flex flex-col gap-y-3 my-3 items-center">
      <input
        type="text"
        placeholder="Enter your name"
        className="rounded-md border border-gray-800 w-60  p-2 text-xs placeholder-gray-500"
      />
      <input
        type="text"
        placeholder="Enter your mobile number"
        className="rounded-md border border-gray-800 w-60 p-2  text-xs placeholder-gray-500"
      />
      <input
        className="cursor-pointer rounded-md bg-[#FFC048] w-60 py-1 text-white text-center"
        value="Submit"
      />
    </div>
  );
};

export default EnquiryForm;
