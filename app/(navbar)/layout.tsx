import Footer from "@/components/Footer";
import ExtraNavbar from "@/components/navbar/ExtraNavbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <nav>
        <ExtraNavbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
