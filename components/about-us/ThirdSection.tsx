import EnquiryForm from "./EnquiryForm";

const ThirdSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:pl-12 items-center my-6 md:my-12 md:px-14 px-5 mt-12 ">
      <section className="text-center justify-center md:px-4 flex-1">
        <h3 className="font-semibold md:text-left text-xl">
          Get in Touch With Us
        </h3>
        <p className="font-serif md:text-left text-center text-sm my-3 ">
          Whether you&apos;re a small startup or a large corporation, Phoenix
          Packaging Solutions is here to meet all your packaging needs. Contact
          us today to discover how we can help your business thrive with our
          cutting-edge packaging solutions.
        </p>
      </section>
      <section className="flex-1">
        <EnquiryForm />
      </section>
    </div>
  );
};

export default ThirdSection;
