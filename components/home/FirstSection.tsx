import { MdArrowOutward } from "react-icons/md";
import Navbar from "../navbar/Navbar";

const FirstSection = () => {
  return (
    <div className="bg-blend-black h-screen bg-[url('/home.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full backdrop-brightness-50 backdrop-opacity-100">
        <nav className="hidden lg:block">
          <Navbar />
        </nav>
        <main className="flex h-full flex-col items-center justify-center text-center text-white">
          <div className="flex items-center justify-center">
            <h1 className="text-base lg:text-4xl">
              Safeguard Your Products and Boost <br />
              Efficiency with{" "}
              <span className="text-[#FFE55F]">
                Phoenix Packaging Solutions
              </span>
            </h1>
          </div>

          <button className=" my-1 flex items-center rounded-md bg-[#FFE55F] px-1 py-0.5 text-sm text-black lg:my-3">
            More about us{" "}
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </main>
      </div>
    </div>
  );
};

export default FirstSection;
