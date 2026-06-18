import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const activeCard = services[activeIndex];

  const radius = 350;

  const rotateNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const rotatePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      {/* Carousel */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative mx-auto h-[600px] w-[1200px] overflow-visible mb-10"
        style={{
          perspective: "3000px",
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[150px]
          "
        />

        {services.map((card, index) => {
          let offset = index - activeIndex;

          if (offset > services.length / 2) offset -= services.length;

          if (offset < -services.length / 2) offset += services.length;

          const angle = (offset * (360 / services.length) * Math.PI) / 180;

          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          const scale = 0.5 + ((z + radius) / (radius * 2)) * 0.35;

          const opacity = 0.3 + ((z + radius) / (radius * 2)) * 0.7;

          const rotateY = offset * 25;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x,
                z,
                scale,
                rotateY,
                opacity,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (offset > 0) rotateNext();
                else if (offset < 0) rotatePrev();
              }}
              className="
                absolute
                left-1/2
                top-1/2
                cursor-pointer
              "
              style={{
                marginLeft: "-185px",
                marginTop: "-250px",
                zIndex: Math.round(z + radius),
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
              whileHover={{
                scale: scale + 0.05,
              }}
            >
              <ServiceCard {...card} />
            </motion.div>
          );
        })}
      </div>

      {/* Preview Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCard.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl px-6 pb-24 text-center"
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/5
              px-6
              py-2
              text-sm
              font-medium
              text-blue-400
            "
          >
            {activeCard.badge}
          </div>

          {/* Heading */}
          <h2
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            {activeCard.heading}
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-9
              text-gray-400
              md:text-xl
            "
          >
            {activeCard.previewDescription}
          </p>

          {/* Button */}
          <button
            onClick={() => navigate(activeCard.route)}
            className="
    mt-12
    rounded-2xl
    bg-blue-600
    px-10
    py-4
    text-lg
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-blue-500
  "
          >
            See More
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ServicesCarousel;
