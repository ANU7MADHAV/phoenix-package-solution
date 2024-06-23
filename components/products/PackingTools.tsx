import hand from "@/public/print.jpeg";
import box from "@/public/boxstrapping.jpeg";
import gun from "@/public/airgun.jpeg";
import banana from "@/public/bananaslicer.jpeg";
import handwrapper from "@/public/hand wrapper.jpeg";
import tape from "@/public/tapediscencer.jpeg";
import Image from "next/image";

const PackingTools = () => {
  const cardItemas = [
    {
      name: "Hand sealer",
      image: hand,
    },
    {
      name: "Box strapping tool",
      image: box,
    },
    {
      name: "Hot air gun",
      image: gun,
    },
    {
      name: "Banana slicer",
      image: banana,
    },
    {
      name: "Hand wrapper",
      image: handwrapper,
    },
    {
      name: "Tape dispenser",
      image: tape,
    },
  ];
  return (
    <div className="grid my-6 md:grid-cols-2 px-4 grid-cols-1 lg:grid-cols-3 gap-x-[90px] gap-y-6 justify-center items-center">
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

export default PackingTools;
