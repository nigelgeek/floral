export default function FAQ({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8" id="contact">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.4em] text-blush/80">FAQ</p>
        <h2 className="mt-4 text-5xl font-display tracking-tight text-cream sm:text-6xl">Questions we often hear</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.question} className="rounded-[1.5rem] border border-border bg-surface p-8">
            <h3 className="font-display text-2xl text-cream">{item.question}</h3>
            <p className="mt-4 text-base leading-8 text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
