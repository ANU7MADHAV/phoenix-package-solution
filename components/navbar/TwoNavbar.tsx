import React from "react";
import Navbar from "./Navbar";
import { MobileNavbar } from "./MobileNavbar";

const TwoNavbar = () => {
  return (
    <>
      <div className="hidden md:visible">
        <Navbar />
      </div>
      <div className="visible md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default TwoNavbar;
