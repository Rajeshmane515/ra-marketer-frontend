import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/transparent_logo.png";
import Button from "../common/Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 z-[1000] w-full px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#08122F]/80 px-5 py-3 backdrop-blur-xl">
          <Link to="/">
            <img src={logo} alt="RA Marketer" className="h-12 w-auto" />
          </Link>

          <button onClick={() => setMenuOpen(true)} className="text-white">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#050B1A]">
          {/* Background Glow */}
          <div className="absolute top-[-100px] left-[-100px] h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6">
            <img src={logo} alt="RA Marketer" className="h-14 w-auto" />

            <button onClick={() => setMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          {/* Links */}
          <div className="flex h-[80vh] flex-col justify-center px-8">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button text="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
