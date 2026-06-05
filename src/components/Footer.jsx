export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-6 py-14 text-sm sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-[0.18em] text-blush">Fleurá</p>
          <p className="max-w-md text-base leading-8 text-muted">
            A luxury floral atelier crafting blooms for memorable moments across Greater Accra.
          </p>
        </div>

        <div className="grid gap-3">
          <a href="#catalog" className="transition hover:text-blush">Catalog</a>
          <a href="#our-story" className="transition hover:text-blush">Our Story</a>
          <a href="#occasions" className="transition hover:text-blush">Occasions</a>
          <a href="#contact" className="transition hover:text-blush">Contact</a>
        </div>

        <div className="space-y-3 text-muted">
          <p className="uppercase tracking-[0.3em] text-blush/80">Contact</p>
          <p>info@fleura.com</p>
          <p>+233 20 000 0000</p>
          <p>Accra, Ghana</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fleurá. All rights reserved.</p>
        <p>Accra</p>
      </div>
    </footer>
  )
}
