import ThirdSection from "@/components/about-us/ThirdSection";
import PackingTools from "@/components/products/PackingTools";

const page = () => {
  return (
    <div className="flex flex-col my-6 items-center">
      <h1 className="mb-12 text-3xl font-semibold">Packing Tools</h1>
      <PackingTools />
      <ThirdSection />
    </div>
  );
};

export default page;
