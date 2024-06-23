import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

export function MobileNavbar() {
  return (
    <main className="flex md:hidden justify-between items-center px-3">
      <div>
        <Image src={logo} alt="logo" className="w-[90px] mt-3" />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <FaBars />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex flex-col -space-y-8 items-center">
              <Image src={logo} alt="logo" className="w-[150px]" />
              <h1>Phoenix</h1>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 my-4 py-4">
            <Link href="/#products" scroll={true}>
              <h3 className="border px-3 py-2 rounded-md hover:scale-105">
                Products
              </h3>
            </Link>

            <Link href="/about-us">
              <h3 className="border px-3 py-2 rounded-md hover:scale-105">
                About us
              </h3>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
}
