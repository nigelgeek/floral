export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8" id="our-story">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-panel">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1494256997604-768d1f608cac"
            alt="Floral arrangement"
            loading="lazy"
          />
          <div className="absolute left-6 top-6 rounded-full bg-bg/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blush">
            Est. 2019
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-blush/80">Our Story</p>
          <div className="space-y-4">
            <h2 className="text-5xl font-display tracking-tight text-cream sm:text-6xl">
              A floral atelier shaped by craft and quiet luxury
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted">
              Fleurá creates editorial arrangements inspired by modern romance and European atelier styling. Every bouquet is hand-tied, locally sourced when possible, and designed to feel timeless.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-border bg-surface p-6 text-center">
              <p className="text-3xl font-semibold text-cream">500+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">Arrangements / mo</p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 text-center">
              <p className="text-3xl font-semibold text-cream">4.9★</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">Client rating</p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 text-center">
              <p className="text-3xl font-semibold text-cream">2 hrs</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">Delivery time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
