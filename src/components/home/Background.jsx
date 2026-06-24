import React from "react";

export default function Background() {
  return (
    <div className="background-wrapper">
      <style>{css}</style>

      <div className="background-inner mx-auto">
        {/* Base */}
        <div className="bg-base" />

        {/* Glows */}
        <div className="glow-blue" />
        <div className="glow-pink" />

        {/* Grid */}

        {/* Floating Dots */}

        <span
          className="float-dot"
          style={{
            left: "45%",
            top: "25%",
            background: "#7aa2ff",
          }}
        />

        <span
          className="float-dot"
          style={{
            left: "58%",
            top: "42%",
            background: "#ff7ad1",
          }}
        />

        <span
          className="float-dot"
          style={{
            left: "70%",
            top: "70%",
            background: "#9b7aff",
          }}
        />

        <span
          className="float-dot"
          style={{
            left: "30%",
            top: "80%",
            background: "#7aa2ff",
          }}
        />

        {/* Dot Cluster Top Right */}

        <div
          className="dot-cluster"
          style={{
            top: 150,
            right: 100,
          }}
        >
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="cluster-dot"
              style={{
                left: `${(i % 6) * 14}px`,
                top: `${Math.floor(i / 6) * 14}px`,
              }}
            />
          ))}
        </div>

        {/* Dot Cluster Bottom Left */}

        <div
          className="dot-cluster"
          style={{
            bottom: 100,
            left: 70,
          }}
        >
          {[...Array(35)].map((_, i) => (
            <span
              key={i}
              className="cluster-dot pink"
              style={{
                left: `${(i % 7) * 14}px`,
                top: `${Math.floor(i / 7) * 14}px`,
              }}
            />
          ))}
        </div>

        {/* Animated Ribbon */}

        <svg
          className="waves"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5b6cff" stopOpacity="0" />
              <stop offset="35%" stopColor="#5b6cff" />
              <stop offset="75%" stopColor="#ff6bd6" />
              <stop offset="100%" stopColor="#ff6bd6" stopOpacity="0" />
            </linearGradient>

            <filter id="waveGlow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          <path
            className="wave wave1"
            d="M -50 620 C 250 450, 500 760, 850 560 S 1350 360, 1700 540"
            stroke="url(#wave1)"
            strokeWidth="2"
            fill="none"
            filter="url(#waveGlow)"
          />

          <path
            className="wave wave2"
            d="M -50 700 C 350 550, 650 850, 1000 650 S 1400 500, 1700 620"
            stroke="url(#wave1)"
            strokeWidth="1.4"
            fill="none"
            opacity="0.6"
          />

          <path
            className="wave wave3"
            d="M -50 540 C 300 420, 600 680, 900 520 S 1400 320, 1700 500"
            stroke="url(#wave1)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

const css = `
.background-wrapper{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:0;
}

.background-inner{
  position:absolute;
  inset:0;
  max-width:1250px; /* same as max-w-6xl */
  margin:0 auto;
  height:100%;
  overflow:hidden;
}

.bg-base{
  position:absolute;
  inset:0;
  background:
  radial-gradient(
    circle at top center,
    #0c1330 0%,
    #050814 55%,
    #04050d 100%
  );
}

.glow-blue{
  position:absolute;
  top:-250px;
  right:-150px;
  width:700px;
  height:700px;
  border-radius:50%;
  background:
  radial-gradient(
    circle,
    rgba(59,130,246,.35) 0%,
    transparent 70%
  );
  filter:blur(40px);
}

.glow-pink{
  position:absolute;
  bottom:-250px;
  left:-150px;
  width:650px;
  height:650px;
  border-radius:50%;
  background:
  radial-gradient(
    circle,
    rgba(236,72,153,.25) 0%,
    transparent 70%
  );
  filter:blur(40px);
}

.grid-bg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  opacity:.6;
}

.waves{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
}

.wave{
  stroke-dasharray:1800;
  animation:waveMove 12s linear infinite;
}

.wave2{
  animation-duration:16s;
}

.wave3{
  animation-duration:20s;
}

@keyframes waveMove{
  from{
    stroke-dashoffset:1800;
  }
  to{
    stroke-dashoffset:0;
  }
}

.float-dot{
  position:absolute;
  width:5px;
  height:5px;
  border-radius:50%;
  animation:float 6s ease-in-out infinite;
}

@keyframes float{
  0%,100%{
    transform:translateY(0);
    opacity:.4;
  }

  50%{
    transform:translateY(-15px);
    opacity:1;
  }
}

.dot-cluster{
  position:absolute;
}

.cluster-dot{
  position:absolute;
  width:3px;
  height:3px;
  border-radius:50%;
  background:rgba(120,140,255,.45);
}

.cluster-dot.pink{
  background:rgba(255,120,210,.45);
}
`;
