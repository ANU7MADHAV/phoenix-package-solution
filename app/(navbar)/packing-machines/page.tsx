import ThirdSection from "@/components/about-us/ThirdSection";
import Products from "@/components/products/Products";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Products />
      <ThirdSection />
    </div>
  );
};

export default page;
