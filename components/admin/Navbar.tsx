import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      name: "Product1",
      path: "/",
    },
    {
      name: "Product2",
      path: "/product2",
    },
    {
      name: "Product3",
      path: "/product3",
    },
  ];
  return (
    <div>
      <ul className="flex p-4 justify-around">
        {navLinks.map((link, i) => (
          <Link href={link.path} key={i}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
