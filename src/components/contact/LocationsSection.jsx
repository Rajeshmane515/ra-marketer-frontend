import React, { useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";

import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";

const locations = [
  {
    office: "India Office",
    address:
      "Bramhacorp Business Park, Kalyani Nagar Road, Wadgaonsheri, Pune, Maharashtra - 411014",
    map: "https://maps.google.com/maps?q=Bramhacorp%20Business%20Park%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  {
    office: "North America Office",
    address: "123 Business Ave, Suite 100, New York, NY 10001",
    map: "https://maps.google.com/maps?q=New%20York%20NY%2010001&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  {
    office: "Middle East Office",
    address:
      "Block 321 Road 2124, Building 1913, 2nd Floor, 232 Exhibitions Ave, Manama, Bahrain",
    map: "https://maps.google.com/maps?q=Manama%20Bahrain&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

const LocationsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563FF]/10 blur-[180px]" />

      <div className="absolute right-20 top-20 h-[250px] w-[250px] rounded-full bg-[#F472B6]/10 blur-[140px]" />

      <Container>
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#2563FF]">
            Our Locations
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Serving Clients
            <span className="bg-gradient-to-r from-[#2563FF] to-[#F472B6] bg-clip-text text-transparent">
              {" "}
              Across Markets
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Our team collaborates with businesses across regions to deliver B2B
            lead generation, demand generation, account-based marketing, and
            content syndication solutions that drive measurable growth.
          </p>
        </div>

        {/* Main Grid */}
        <GlassCard className="grid overflow-hidden border border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="self-center space-y-3 bg-black p-4">
            {locations.map((location, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`
                  group cursor-pointer rounded-2xl border p-4 transition-all duration-300
                  ${
                    active === index
                      ? "border-[#2563FF]/40 bg-[#2563FF]/10 shadow-[0_0_40px_rgba(37,99,255,0.15)]"
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                        ${
                          active === index
                            ? "bg-[#2563FF]/20 text-[#2563FF]"
                            : "bg-white/5 text-gray-400"
                        }
                      `}
                    >
                      <MapPin size={22} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {location.office}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className={`
                      mt-1 shrink-0 transition duration-300
                      ${
                        active === index
                          ? "translate-x-1 text-[#2563FF]"
                          : "text-gray-500 group-hover:text-white"
                      }
                    `}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
            <iframe
              src={locations[active].map}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </GlassCard>
      </Container>
    </section>
  );
};

export default LocationsSection;
