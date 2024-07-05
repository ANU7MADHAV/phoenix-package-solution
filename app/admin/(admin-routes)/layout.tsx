import Navbar from "@/components/admin/Navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
}
