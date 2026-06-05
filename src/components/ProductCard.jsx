export default function ProductCard({ product }) {
  return (
    <article className={`group overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br ${product.gradient} shadow-panel`}>
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,160,176,0.18),_transparent_42%)]" />
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <span className="absolute right-4 top-4 rounded-full bg-bg/90 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-blush shadow-sm">
          {product.tag}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-blush-soft">{product.subtitle}</p>
        <h3 className="font-display text-3xl tracking-tight text-cream">{product.title}</h3>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <span>{product.price}</span>
          <div className="flex gap-3">
            <button className="rounded-full border border-border px-4 py-2 uppercase tracking-[0.2em] transition hover:border-blush hover:text-blush">
              Details
            </button>
            <button className="rounded-full bg-blush px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-bg transition hover:bg-blush-light">
              Order
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
