import band from "@/public/band-sealer.jpeg";
import vendor from "@/public/vendor.jpeg";
import vaccum from "@/public/vaccum.png";
import semi from "@/public/semi-auto.jpeg";
import dry from "@/public/dry-ink.jpeg";
import box from "@/public/box-strapping.png";
import portable from "@/public/portable.jpeg";
import meat from "@/public/meat.jpeg";
import veg from "@/public/veg.png";
import Image from "next/image";

const Card = () => {
  const cardItemas = [
    {
      name: "Continuous band sealer",
      image: vendor,
    },
    {
      name: "Vaccum packing machine",
      image: vaccum,
    },
    {
      name: "Semi automatic induction sealer",
      image: semi,
    },
    {
      name: "Dry ink coding machine",
      image: dry,
    },
    {
      name: "Box strapping machine",
      image: box,
    },
    {
      name: "Band sealer with gas flushing",
      image: band,
    },
    {
      name: "Portable induction sealer",
      image: portable,
    },
    {
      name: "Meat mincer",
      image: meat,
    },
    {
      name: "Vegetable cutting machine",
      image: veg,
    },
  ];
  return (
    <div className="grid md:grid-cols-2 px-4 grid-cols-1 lg:grid-cols-3 gap-x-[90px] gap-y-6 items-center">
      {cardItemas.map((item, i) => (
        <div key={i}>
          <div className="md:w-80 w-60 space-y-3 flex flex-col items-center">
            <Image
              src={item.image}
              alt="product images"
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            />

            <h3 className="font-semibold">{item.name}</h3>
            <button className="bg-[#FFC048] text-white  px-2 py-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#f7b439] duration-300">
              Enquiry now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
