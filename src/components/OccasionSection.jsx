export default function OccasionSection({ options, selected, onSelect }) {
  const secondaryImage = options.find((option) => option.key !== selected.key)?.image

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8" id="occasions">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-blush/80">Shop by occasion</p>
          <div>
            <h2 className="text-5xl font-display tracking-tight text-cream sm:text-6xl">Every moment deserves flowers</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Discover blooms curated for celebrations, intimate gestures, and unforgettable corporate moments. The right arrangement can transform any environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {options.map((option) => {
              const active = option.key === selected.key
              return (
                <button
                  key={option.key}
                  onClick={() => onSelect(option)}
                  className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                    active ? 'border-blush bg-blush text-bg' : 'border-border text-cream hover:border-blush hover:text-blush'
                  }`}
                >
                  {option.title}
                </button>
              )
            })}
          </div>

          <a href="#custom-order" className="inline-flex rounded-full border border-border bg-surface px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-blush hover:text-blush">
            Start a custom order
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-[280px_180px] lg:grid-cols-1 lg:grid-rows-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-panel">
            <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-panel">
            <img src={secondaryImage} alt="Collection" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
