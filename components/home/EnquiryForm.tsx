const EnquiryForm = () => {
  return (
    <main className="h-100% my-[90px] mb-[120px] flex justify-center lg:mt-0 lg:h-[400px]  lg:flex-row">
      <div className="grid w-3/4  md:my-[60px] grid-cols-1 justify-center lg:grid-cols-2">
        <div className="flex py-[40px] flex-col items-center justify-center bg-[#FCFBF1] ">
          <h1 className="my-6 text-base font-semibold lg:text-xl">
            We Are Here to Help
          </h1>
          <p className="my-2 px-2 text-left text-sm font-light lg:px-6">
            At Phoenix Packaging Solutions, we are committed to providing our
            clients with exceptional service and support. We offer comprehensive
            consultations to understand your specific needs and recommend the
            most suitable packaging machinery solutions.
          </p>
        </div>
        <div className="flex py-[40px] flex-col items-center justify-center bg-[#F1EABA] px-4">
          <h1 className="my-6 text-xl font-semibold">Enquiry Now</h1>
          <div className="flex flex-col gap-y-6 rounded-md border border-gray-800 p-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded-md border border-gray-800 bg-[#F1EABA] p-2 text-xs placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className="rounded-md border border-gray-800 bg-[#F1EABA] p-2  text-xs placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Enter your Mobile number"
              className="rounded-md border border-gray-800 bg-[#F1EABA] p-2 text-xs placeholder-gray-500"
            />
            <input
              className="cursor-pointer rounded-md bg-[#FFC048] py-1  text-center"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnquiryForm;
