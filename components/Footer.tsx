import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0C0C0C] py-3 text-white text-center flex flex-col lg:flex-row lg:justify-between lg:text-left md:px-14">
      <section>
        <h3 className="font-semibold text-lg my-3">REACH US</h3>
        <h3 className="font-semibold text-base my-3">ADDRESS</h3>
        <section className="my-3 space-y-1 opacity-80">
          <p>35/3879, padikkala building</p>
          <p>near veterinary hospital,Kokkala</p>
          <p>Thrissur-680021</p>
        </section>
      </section>
      <section>
        <h3 className="font-semibold text-lg my-3">CONTACT US</h3>
        <section className="my-3 space-y-1 opacity-80">
          <p>Mob: +91 7736101202</p>
          <p>Mob: +91 7012097852</p>
        </section>

        <h3 className="font-semibold text-lg my-3">EMAIL</h3>
        <p className="my-3 opacity-80">sales@elitehomesindia.co.in</p>
      </section>
      <section>
        <h3 className="font-semibold text-lg my-3">PRODUCTS</h3>
        <section className="my-3 space-y-1 opacity-80">
          <p>Packing Machines</p>
          <p>Packing Tools</p>
          <p>Packing Materials</p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
