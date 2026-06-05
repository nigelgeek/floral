export default function Marquee() {
  const marqueeText = 'Roses ✦ Peonies ✦ Orchids ✦ Tulips ✦ Lilies ✦'

  return (
    <section className="overflow-hidden border-t border-border bg-blush px-4 py-4 text-sm uppercase tracking-[0.3em] text-bg sm:px-8">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap text-[0.95rem] font-semibold">
          <span className="mr-12">{marqueeText}</span>
          <span className="mr-12">{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </section>
  )
}
