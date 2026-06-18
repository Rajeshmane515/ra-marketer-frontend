import React, { useEffect, useState } from "react";

const ORB_COUNT = 12;
const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 600;

const createOrb = () => ({
  x: Math.random() * (CONTAINER_WIDTH - 20),
  y: Math.random() * (CONTAINER_HEIGHT - 20),
  vx: (Math.random() - 0.5) * 3,
  vy: (Math.random() - 0.5) * 3,
});

const OrbitSystem = () => {
  const [orbs, setOrbs] = useState(
    Array.from({ length: ORB_COUNT }, createOrb),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) =>
        prev.map((orb) => {
          let x = orb.x + orb.vx;
          let y = orb.y + orb.vy;

          let vx = orb.vx;
          let vy = orb.vy;

          if (x <= 0 || x >= CONTAINER_WIDTH - 20) {
            vx *= -1;
          }

          if (y <= 0 || y >= CONTAINER_HEIGHT - 20) {
            vy *= -1;
          }

          return {
            x,
            y,
            vx,
            vy,
          };
        }),
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center pointer-events-none">
      <div
        className="relative"
        style={{
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
        }}
      >
        {/* Rings */}
        {[150, 300, 450, 600, 750].map((size, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-white/10"
            style={{
              width: size,
              height: size,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Moving Orbs */}
        {orbs.map((orb, index) => (
          <div
            key={index}
            className="
              absolute
              h-4
              w-4
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-pink-500
              shadow-[0_0_30px_rgba(37,99,255,1)]
            "
            style={{
              left: orb.x,
              top: orb.y,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OrbitSystem;
