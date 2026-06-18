const Button = ({ text }) => {
  return (
    <button
      className="
        relative px-8 py-4 rounded-full overflow-hidden group
        transition-all duration-150
        active:scale-95 active:translate-y-[2px]
      "
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563FF] via-[#3B82F6] to-[#F472B6]"></div>

      {/* Inner Dark Layer */}
      <div className="absolute inset-[1.5px] rounded-full bg-black/90 backdrop-blur-xl"></div>

      {/* Left Glow */}
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[#2563FF]/30 blur-2xl"></div>

      {/* Right Glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#F472B6]/30 blur-2xl"></div>

      {/* Center Shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#2563FF]/20 to-[#F472B6]/20 blur-2xl"></div>

      {/* Text */}
      <span className="relative z-10 text-white font-semibold">{text}</span>
    </button>
  );
};

export default Button;
