import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/transparent_logo.png";
import Button from "../common/Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-999 w-full px-6 py-5">
      <nav
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          rounded-full border px-8 transition-all duration-300

         ${
           scrolled
             ? "border-white/10 bg-white/10 shadow-lg backdrop-blur-xl"
             : "border-white/10 bg-black/20 backdrop-blur-md"
         }
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RA Marketer Logo" className="h-20 w-auto" />
        </Link>

        {/* Nav Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                  relative
                  pb-1
                  font-medium
                  transition-all
                  duration-300

                  ${isActive ? "text-white" : "text-zinc-300 hover:text-white"}
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-1
                        h-[2px]
                        rounded-full
                        bg-gradient-to-r
                        from-[#2563FF]
                        to-[#2563FF]
                        transition-all
                        duration-300

                        ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact">
          <Button text="Get Started" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
