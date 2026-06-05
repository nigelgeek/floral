export default function Nav() {
  const links = ['Catalog', 'Our Story', 'Occasions', 'Contact']

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-display text-xl font-semibold tracking-[0.18em] text-blush transition hover:text-blush/80">Fleurá</a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm uppercase tracking-[0.2em] text-muted transition hover:text-cream">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm text-muted">
          <button className="hidden rounded-full border border-border px-3 py-2 uppercase tracking-[0.2em] transition hover:border-blush hover:text-blush md:inline-flex">
            Wishlist
          </button>
          <button className="rounded-full border border-border px-3 py-2 uppercase tracking-[0.2em] transition hover:border-blush hover:text-blush">
            Search
          </button>
          <button className="relative rounded-full border border-border bg-[#161214] px-4 py-2 uppercase tracking-[0.2em] transition hover:border-blush hover:text-blush">
            Cart
            <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blush text-[11px] font-semibold text-bg">2</span>
          </button>
        </div>
      </div>
    </header>
  )
}
