import React from "react";
import { motion } from "framer-motion";

export const FloatingOrbs = () => {
  const orbs = [
    {
      size: 400,
      x: "10%",
      y: "20%",
      delay: 0,
      duration: 20,
      color: "from-blue-500/30 to-purple-500/30",
    },
    {
      size: 300,
      x: "80%",
      y: "60%",
      delay: 2,
      duration: 25,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      size: 500,
      x: "50%",
      y: "80%",
      delay: 4,
      duration: 30,
      color: "from-blue-600/25 to-indigo-600/25",
    },
    {
      size: 350,
      x: "20%",
      y: "70%",
      delay: 1,
      duration: 22,
      color: "from-violet-500/20 to-blue-500/20",
    },
    {
      size: 450,
      x: "70%",
      y: "30%",
      delay: 3,
      duration: 28,
      color: "from-indigo-500/30 to-purple-600/30",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
