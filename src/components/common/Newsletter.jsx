import React, { useState } from "react";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Subscribed Successfully!");

        setEmail("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-12 pb-12">
      <div className="rounded-[32px] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-3xl font-bold mb-3">
            Stay ahead with smart lead insights
          </h2>

          <p className="text-zinc-400">
            Get industry updates and B2B growth strategies directly in your
            inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-black/60 border border-white/10 rounded-full px-6 py-4 outline-none text-white w-full sm:w-[320px] focus:border-blue-500 transition"
          />

          <button type="submit" disabled={loading}>
            <Button text={loading ? "Subscribing..." : "Subscribe"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
