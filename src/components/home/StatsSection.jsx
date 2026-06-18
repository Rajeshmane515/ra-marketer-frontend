const stats = [
  {
    number: "10K+",
    label: "Active Users",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Support Available",
  },
  {
    number: "250%",
    label: "Business Growth",
  },
]

const StatsSection = () => {
  return (
    <section className="bg-black text-white px-6 py-24">
      
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
                {stat.number}
              </h2>

              <p className="text-zinc-400 text-lg">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default StatsSection