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

      const response = await fetch(
        "https://ra-marketer-backend.onrender.com/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

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
    <div className="px-4 sm:px-6 lg:px-12 pb-8 lg:pb-12">
      <div
        className="
          relative
          overflow-hidden
          rounded-[24px]
          lg:rounded-[32px]
          border
          border-white/10
          p-6
          sm:p-8
          lg:p-10
        "
      >
        {/* Glow Effects */}
        <div className="absolute left-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-pink-500/20 blur-3xl" />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h2
              className="
                text-2xl
                sm:text-3xl
                lg:text-5xl
                font-bold
                leading-tight
                mb-3
              "
            >
              Stay ahead with smart lead insights
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base">
              Get industry updates and B2B growth strategies directly in your
              inbox.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="
              relative
              z-10
              flex
              flex-col
              sm:flex-row
              items-stretch
              gap-4
              w-full
              lg:w-auto
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                bg-black/60
                border
                border-white/10
                rounded-full
                px-6
                py-4
                outline-none
                text-white
                w-full
                lg:w-[420px]
                focus:border-blue-500
                transition
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              <Button text={loading ? "Subscribing..." : "Subscribe"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
