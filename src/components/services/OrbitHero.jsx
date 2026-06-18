import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Building2, Share2 } from "lucide-react";

import targetImg from "../../assets/services/target_trans.png";

const OrbitHero = () => {
  const services = [
    {
      icon: <Target size={28} />,
      label: "Lead Generation",
      angle: 0,
      radius: 250, // Outer Ring
    },
    {
      icon: <Building2 size={28} />,
      label: "ABM",
      angle: 90,
      radius: 190, // Middle Ring
    },
    {
      icon: <Share2 size={28} />,
      label: "Content Syndication",
      angle: 180,
      radius: 250, // Inner Ring
    },
    {
      icon: <TrendingUp size={28} />,
      label: "Demand Generation",
      angle: 270,
      radius: 190, // Outer Ring
    },
  ];

  return (
    <section className="relative flex h-[600px] items-center justify-center overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative h-[600px] w-[600px]">
        {/* Orbit Rings */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-blue-500/20" />

        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-blue-500/15" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-blue-500/10" />

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
                className="group flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,255,0.4)]"
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={targetImg}
            alt="Target"
            className="w-[420px] object-contain drop-shadow-[0_0_60px_rgba(37,99,255,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitHero;
