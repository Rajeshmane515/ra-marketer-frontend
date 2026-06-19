import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Building2, Share2 } from "lucide-react";

import targetImg from "../../assets/services/target_trans.png";

const OrbitHero = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth >= 640 &&
    window.innerWidth < 1024;

  const services = [
    {
      icon: <Target size={28} />,
      label: "Lead Generation",
      angle: 0,
      radius: isMobile ? 140 : isTablet ? 190 : 250,
    },
    {
      icon: <Building2 size={28} />,
      label: "ABM",
      angle: 90,
      radius: isMobile ? 110 : isTablet ? 150 : 190,
    },
    {
      icon: <Share2 size={28} />,
      label: "Content Syndication",
      angle: 180,
      radius: isMobile ? 140 : isTablet ? 190 : 250,
    },
    {
      icon: <TrendingUp size={28} />,
      label: "Demand Generation",
      angle: 270,
      radius: isMobile ? 110 : isTablet ? 150 : 190,
    },
  ];

  return (
    <section
      className="
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
        h-[350px]
        sm:h-[450px]
        lg:h-[600px]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          h-[350px]
          w-[350px]
          sm:h-[450px]
          sm:w-[450px]
          lg:h-[600px]
          lg:w-[600px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
          lg:blur-[150px]
        "
      />

      <div
        className="
          relative
          h-[350px]
          w-[350px]
          sm:h-[450px]
          sm:w-[450px]
          lg:h-[600px]
          lg:w-[600px]
        "
      >
        {/* Orbit Rings */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            sm:h-[380px]
            sm:w-[380px]
            lg:h-[500px]
            lg:w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            lg:border-3
            border-blue-500/20
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            sm:h-[300px]
            sm:w-[300px]
            lg:h-[380px]
            lg:w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            lg:border-3
            border-blue-500/15
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[150px]
            w-[150px]
            sm:h-[220px]
            sm:w-[220px]
            lg:h-[260px]
            lg:w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            lg:border-3
            border-blue-500/10
          "
        />

        {/* Orbiting Icons */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${service.angle}deg)
                  translate(${service.radius}px)
                  rotate(-${service.angle}deg)
                `,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="
                  group
                  flex
                  h-12
                  w-12
                  sm:h-16
                  sm:w-16
                  lg:h-20
                  lg:w-20
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:shadow-[0_0_30px_rgba(37,99,255,0.4)]
                "
              >
                {service.icon}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Center Target Image */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <img
            src={targetImg}
            alt="Target"
            className="
              w-[180px]
              sm:w-[280px]
              lg:w-[420px]
              object-contain
              drop-shadow-[0_0_60px_rgba(37,99,255,0.5)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitHero;
