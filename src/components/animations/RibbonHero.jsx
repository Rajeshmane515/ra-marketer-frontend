import React, { useEffect, useRef, useState } from "react";

const W = 1920;
const H = 1080;

const Circle = ({ x, y, r, color, opacity, blur = 8 }) => (
  <div
    style={{
      position: "absolute",
      left: x - r,
      top: y - r,
      width: r * 2,
      height: r * 2,
      borderRadius: "50%",
      background: `radial-gradient(circle at 35% 30%, ${color} 100%, ${color}cc 30%, ${color}33 60%, transparent 80%)`,
      filter: `blur(${blur}px)`,
      opacity,
    }}
  />
);

const Arch = ({
  cx,
  cy,
  r,
  thickness,
  startDeg,
  endDeg,
  gradId,
  stops,
  opacity,
  rotate,
}) => {
  const toRad = (d) => (d * Math.PI) / 180;

  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));

  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));

  const r2 = r - thickness;

  const x3 = cx + r2 * Math.cos(toRad(endDeg));
  const y3 = cy + r2 * Math.sin(toRad(endDeg));

  const x4 = cx + r2 * Math.cos(toRad(startDeg));
  const y4 = cy + r2 * Math.sin(toRad(startDeg));

  const large = endDeg - startDeg > 180 ? 1 : 0;

  const d = `
    M${x1} ${y1}
    A${r} ${r} 0 ${large} 1 ${x2} ${y2}
    L${x3} ${y3}
    A${r2} ${r2} 0 ${large} 0 ${x4} ${y4}
    Z
  `;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          {stops.map((s, i) => (
            <stop key={i} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>

        <filter id={`f-${gradId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g transform={`rotate(${rotate} ${cx} ${cy})`}>
        <path
          d={d}
          fill={`url(#${gradId})`}
          filter={`url(#f-${gradId})`}
          opacity={0.6}
        />

        <path d={d} fill={`url(#${gradId})`} />
      </g>
    </svg>
  );
};

const Ribbon = ({ phase, hueShift, opacity, thickness, yOffset, amp }) => {
  const cy = H / 2 + yOffset;

  const steps = 80;

  const points = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    const x = t * W;

    const y =
      cy +
      Math.sin(t * Math.PI * 2 + phase) * amp +
      Math.sin(t * Math.PI * 4 + phase * 1.3) * (amp * 0.35);

    points.push({ x, y });
  }

  const top = points.map((p) => `${p.x},${p.y - thickness}`).join(" L");

  const bot = [...points]
    .reverse()
    .map((p) => `${p.x},${p.y + thickness}`)
    .join(" L");

  const d = `M${top} L${bot} Z`;

  const gradId = `rib-${hueShift}-${yOffset}-${thickness}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0%" stopColor="#2563FF" />
          <stop offset="40%" stopColor="#60A5FA" />
          <stop offset="70%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#2563FF" />
        </linearGradient>

        <filter
          id={`gl-${gradId}`}
          x="-10%"
          y="-50%"
          width="120%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <path
        d={d}
        fill={`url(#${gradId})`}
        filter={`url(#gl-${gradId})`}
        opacity={0.55}
      />

      <path d={d} fill={`url(#${gradId})`} opacity={0.85} />
    </svg>
  );
};

const Pillar = ({ x, baseY, w, h, color, opacity, float }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: baseY - h + float,
      width: w,
      height: h,
      background: `linear-gradient(180deg, ${color}dd 0%, ${color}66 40%, ${color}11 100%)`,
      borderRadius: w / 2,
      opacity,
      boxShadow: `
        0 40px 80px -20px ${color}66,
        inset 0 0 0 1px rgba(255,255,255,0.25),
        inset 0 20px 40px rgba(255,255,255,0.15)
      `,
    }}
  />
);

const LOOP_SECONDS = 10;

const RibbonHero = () => {
  const [t, setT] = useState(0);

  const startRef = useRef(null);

  const rafRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      if (startRef.current === null) {
        startRef.current = now;
      }

      const elapsed = (now - startRef.current) / 1000;

      setT((elapsed % LOOP_SECONDS) / LOOP_SECONDS);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const phase = t * Math.PI * 2;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative mx-auto max-w-7xl h-full">
        {/* Ribbons */}

        <Ribbon
          phase={phase}
          hueShift={-15}
          opacity={0.32}
          thickness={75}
          yOffset={-40}
          amp={120}
        />

        <Ribbon
          phase={phase + 0.8}
          hueShift={25}
          opacity={0.55}
          thickness={55}
          yOffset={20}
          amp={100}
        />

        <Ribbon
          phase={phase + 1.6}
          hueShift={55}
          opacity={0.75}
          thickness={32}
          yOffset={-15}
          amp={90}
        />

        <Ribbon
          phase={phase + 2.4}
          hueShift={90}
          opacity={0.6}
          thickness={18}
          yOffset={35}
          amp={75}
        />
      </div>
    </div>
  );
};

export default RibbonHero;
