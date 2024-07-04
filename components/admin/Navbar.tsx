import Link from "next/link";

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
      <ul className="flex p-4 justify-around">
        <Link href="/admin/dashboard">
          <li>Home</li>
        </Link>
        {navLinks.map((link, i) => (
          <Link href={link.path} key={i}>
            <li>{link.name}</li>
          </Link>
        ))}
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
