export default function ValuesStrip() {
  const values = ['Aesthetics', 'Quality', 'Excellence', 'Care']

  return (
    <section className="border-y border-border bg-bg/90 px-6 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 text-center text-sm uppercase tracking-[0.3em] text-muted md:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="flex flex-col items-center gap-3">
              <span className="text-blush">✦</span>
              <span className="font-semibold text-cream">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
