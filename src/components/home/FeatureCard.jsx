const FeatureCard = ({ title, desc, icon: Icon }) => {
  return (
    <div
      className="
        min-w-[340px]
        max-w-[340px]
        bg-white/[0.03]
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur-xl
        hover:border-blue-500/30
        transition-all
        duration-500
        hover:-translate-y-2
        group
      "
    >

      {/* ICON BOX */}
      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-500/20
          mb-6
          flex
          items-center
          justify-center
          group-hover:bg-blue-500/20
          transition-all
          duration-500
        "
      >

        <Icon
          className="
            w-7
            h-7
            text-blue-400
          "
        />

      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-zinc-400 leading-relaxed">
        {desc}
      </p>

    </div>
  )
}

export default FeatureCard