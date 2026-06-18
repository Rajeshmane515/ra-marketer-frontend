import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";
import GlowButton from "../ui/GlowButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://ra-marketer-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully!");

        setFormData({
          fullName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="relative overflow-hidden border border-white/10 p-8">
      {/* Blue Glow */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#2563FF]/10 blur-[100px]" />

      {/* Pink Glow */}
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#F472B6]/10 blur-[100px]" />

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white">
          Let's Discuss Your Growth Goals
        </h3>

        <p className="mt-3 text-gray-400">
          Tell us about your business objectives and we'll explore how RA
          Marketer can help.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Name + Email */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-[#2563FF]/50 focus:bg-white/[0.05]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-[#2563FF]/50 focus:bg-white/[0.05]"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-[#2563FF]/50 focus:bg-white/[0.05]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">Message</label>

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-[#2563FF]/50 focus:bg-white/[0.05]"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button type="submit" disabled={loading} className="w-full">
              <GlowButton text={loading ? "Sending..." : "Send Message"} />
            </button>
          </div>
        </form>
      </div>
    </GlassCard>
  );
};

export default ContactForm;
