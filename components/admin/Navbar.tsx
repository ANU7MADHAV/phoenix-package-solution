import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  const navLinks = [
    {
      name: "Machines",
      path: "/admin/machines",
    },
    {
      name: "Tools",
      path: "/admin/tools",
    },
    {
      name: "Materials",
      path: "/admin/materials",
    },
  ];
  return (
    <div>
      <ul className="flex p-4 justify-around items-center font-medium">
        <Link href="/admin/machines">
          <Image src={logo} alt="logo" width={120} />
        </Link>
        {navLinks.map((link, i) => (
          <Link href={link.path} key={i}>
            <li>{link.name}</li>
          </Link>
        ))}
        <li className="cursor-auto">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
