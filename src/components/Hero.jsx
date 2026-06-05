export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(232,160,176,0.14),_transparent_40%),linear-gradient(180deg,_#150f12_0%,_#090608_100%)] pt-28 pb-24 sm:pb-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(232,160,176,0.15),_transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,_transparent,_#0e0c0d_95%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl pt-10">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blush/80">Fresh · Artisan · Accra</p>
          <h1 className="font-display text-[clamp(48px,8vw,110px)] leading-[0.9] tracking-[-0.04em] text-cream">
            Beauty <span className="block italic text-blush">in bloom</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
            A curated floral experience built for unforgettable moments. Shop luxe bouquets, premium arrangements, and inspired gifting with same-day delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#catalog" className="inline-flex rounded-full bg-blush px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-bg transition hover:bg-blush-light">
              Shop Now
            </a>
            <a href="#our-story" className="inline-flex rounded-full border border-border px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-blush hover:text-blush">
              Our Story →
            </a>
          </div>
        </div>

        <div className="relative hidden w-full max-w-xl lg:block">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,160,176,0.18),_transparent_22%)]" />
            <div className="relative h-[420px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80)' }} />
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center text-sm uppercase tracking-[0.35em] text-muted">
        <span className="mr-3">scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
