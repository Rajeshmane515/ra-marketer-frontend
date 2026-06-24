import React from "react";

const PageContainer = ({ children }) => {
  return (
    <section className="relative overflow-hidden bg-black py-6">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563FF]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
};

export default PageContainer;
