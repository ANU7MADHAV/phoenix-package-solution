import { IoMdBasketball } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const ThirdSection = () => {
  return (
    <div className="flex h-screen flex-col justify-center gap-y-2 bg-[#F1EABA] py-[20px] lg:gap-y-10 ">
      <div className="flex justify-center pt-4">
        <h1 className="text-center my-6 text-lg font-semibold lg:text-3xl">
          Why Choose Phoenix Packaging Solutions?
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex w-4/5 flex-col items-center justify-around gap-y-5 lg:flex-row">
          <section className="mx-8">
            <h3 className="-ml-11 flex items-center gap-x-3 text-lg font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-2xl text-white lg:p-[5px]">
                <IoMdBasketball />
              </span>
              Extensive Selection
            </h3>
            <p className="text-sm font-light">
              We offer a wide variety of packaging machines to cater to diverse
              product types and packaging needs.
            </p>
          </section>
          <section className="mx-8">
            <h3 className="-ml-11 md:-ml-[50px] flex items-center gap-x-3 text-lg font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-2xl text-white lg:p-[5px]">
                <IoShieldOutline />
              </span>
              Superior Protection
            </h3>
            <p className="text-sm font-light">
              Our machines ensure your products arrive at their destination safe
              and sound.
            </p>
          </section>
          <section className="mx-8">
            <h3 className="-ml-11 flex items-center gap-x-3 text-lg font-medium">
              <span className="rounded-full bg-[#FFC048] p-[3px] text-2xl text-white lg:p-[5px]">
                <IoCallOutline />
              </span>
              Expert Support
            </h3>
            <p className="text-sm font-light">
              Our knowledgeable team is here to assist you in selecting the
              right equipment and answer any questions you may have.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
