import { Link } from "react-router-dom";
import Newsletter from "../common/Newsletter";
import logo from "../../assets/logos/transparent_logo.png";

import { FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-3 sm:px-6 pb-8 lg:pb-10">
      <div className="max-w-7xl py-10 mx-auto rounded-[30px] lg:rounded-[40px] border border-white/10 bg-gradient-to-b from-[#0B1220] via-[#080D18] to-black overflow-hidden shadow-[0_0_80px_rgba(37,99,255,0.08)]">
        {/* Newsletter */}
        <Newsletter />

        {/* Top Section */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[380px_140px_200px_300px]
            gap-10
            lg:gap-12
            px-5
            sm:px-8
            lg:px-14
          "
        >
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src={logo}
                alt="RA Marketer Logo"
                className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p
              className="
                text-zinc-400
                text-sm
                sm:text-[15px]
                leading-7
                mb-6
                lg:mb-8
                max-w-full
                lg:max-w-[380px]
              "
            >
              B2B lead generation solutions that help businesses connect,
              engage, and convert high-quality leads through data-driven
              strategies, precision targeting, and scalable outreach.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#2563FF] text-sm font-bold uppercase tracking-[4px] mb-6 lg:mb-8">
              Company
            </h3>

            <ul className="space-y-4 text-zinc-400 text-[15px]">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#2563FF] text-sm font-bold uppercase tracking-[4px] mb-6 lg:mb-8">
              Services
            </h3>

            <ul className="space-y-4 text-zinc-400 text-[15px]">
              <li>
                <Link
                  to="/services/lead-generation"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Lead Generation
                </Link>
              </li>

              <li>
                <Link
                  to="/services/demand-generation"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Demand Generation
                </Link>
              </li>

              <li>
                <Link
                  to="/services/content-syndication"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Content Syndication
                </Link>
              </li>

              <li>
                <Link
                  to="/services/account-based-marketing"
                  className="hover:text-[#2563FF] transition-all duration-300"
                >
                  Account Based Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#2563FF] text-sm font-bold uppercase tracking-[4px] mb-6 lg:mb-8">
              Contact
            </h3>

            <ul className="space-y-5 text-zinc-400 text-[15px]">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563FF]/10 flex items-center justify-center shrink-0">
                  <HiOutlineMail className="text-[#2563FF] text-xl" />
                </div>

                <a
                  href="mailto:info@ramarketer.com"
                  className="hover:text-[#2563FF] transition-colors"
                >
                  info@ramarketer.com
                </a>
              </li>

              <li className="flex items-center gap-4 ">
                <div className="w-10 h-10 rounded-xl bg-[#F472B6]/10 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-[#F472B6] text-sm" />
                </div>

                <a
                  href="tel:+13322426637"
                  className="hover:text-[#2563FF] transition-colors"
                >
                  +1 332 242 6637
                </a>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563FF]/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-[#2563FF] text-sm" />
                </div>

                <span>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="
            border-t
            border-white/10
            px-5
            sm:px-8
            lg:px-14
            pt-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-6
            text-center
            lg:text-left
          "
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} RA Marketer.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/ramarketer/"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-[#2563FF] hover:bg-[#2563FF]/10 hover:text-[#2563FF] transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-[#F472B6] hover:bg-[#F472B6]/10 hover:text-[#F472B6] transition-all duration-300"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="mailto:info@ramarketer.com"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-[#2563FF] hover:bg-[#2563FF]/10 hover:text-[#2563FF] transition-all duration-300"
            >
              <HiOutlineMail size={20} />
            </a>
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-3
              sm:gap-8
              text-sm
              text-zinc-500
            "
          >
            <Link
              to="/privacy-policy"
              className="hover:text-[#2563FF] transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#2563FF] transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
