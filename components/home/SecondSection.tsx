import Image from "next/image";
import material from "@/public/material.jpeg";
import packaging from "@/public/packaging.jpeg";
import tools from "@/public/tools.jpeg";
import Link from "next/link";

const SecondSection = () => {
  return (
    <main className="my-[50px]">
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center lg:my-10">
          <p className="w-3/4 text-sm lg:text-base">
            <span className="font-serif text-xl font-extrabold text-[#f9dd4e] lg:text-3xl">
              &quot;
            </span>
            We help businesses succeed by providing them with top-notch
            packaging machines. These machines are not only reliable and
            innovative, but they also make packaging faster and easier for your
            business{" "}
            <span className="font-serif text-xl font-extrabold text-[#f9dd4e] lg:text-3xl">
              &quot;
            </span>
          </p>
        </div>
        <div
          id="products"
          className="my-6 text-2xl font-bold lg:mb-[80px] lg:text-3xl"
        >
          <h2>Products</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <Link href="/packing-machines">
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
          <Link href="/packing-tools">
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
          <Link href="/packing-materials ">
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
      </div>
    </main>
  );
};

export default SecondSection;
