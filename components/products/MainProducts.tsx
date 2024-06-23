import Image from "next/image";
import material from "@/public/material.jpeg";
import packaging from "@/public/packaging.jpeg";
import tools from "@/public/tools.jpeg";
import Link from "next/link";

const MainProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-x-10 md:flex-row">
      <Link href="/products/packing-machines">
        <section className="flex flex-col items-center ">
          <Image
            src={packaging}
            alt="packaging machines "
            className="h-[150px] w-[150px] overflow-hidden rounded-lg lg:h-[250px] lg:w-[250px]"
          />
          <h3 className="my-2 text-base font-semibold  lg:text-lg">
            Packing Machines
          </h3>
        </section>
      </Link>
      <Link href="products/packing-tools">
        <section className="flex flex-col items-center">
          <Image
            src={tools}
            alt=" packaging tools"
            className="h-[150px] w-[150px] overflow-hidden rounded-lg lg:h-[250px] lg:w-[250px]"
          />
          <h3 className="my-2 text-base font-semibold  lg:text-lg">
            Packing Tools
          </h3>
        </section>
      </Link>
      <Link href="products/packing-materials">
        <section className="flex flex-col items-center">
          <Image
            src={material}
            alt="packaging material"
            className="h-[150px] w-[150px] overflow-hidden rounded-lg lg:h-[250px] lg:w-[250px]"
          />
          <h3 className="my-2 text-base font-semibold lg:text-lg">
            Packing Materials
          </h3>
        </section>
      </Link>
    </div>
  );
};

export default MainProducts;
