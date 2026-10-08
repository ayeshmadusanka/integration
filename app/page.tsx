import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react'
import { BookingForm } from '@/components/booking-form'

const shows = [
  { date: '27.09.26', name: 'Higher Ground Vol 3', location: 'Colombo', status: 'Event Passed' },
  { date: '14.11.26', name: 'AIR GEARD', location: 'Colombo', ticketLink: 'https://www.spotseeker.lk/event/6aba7ab350dd7' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-10 lg:px-16">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between" aria-label="Main navigation">
          <a href="#top" className="font-display text-lg font-black tracking-[-0.08em]" aria-label="Integration home">INTEGRATION</a>
          <div className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-primary" href="#music">Music</a>
            <a className="transition-colors hover:text-primary" href="#shows">Shows</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </div>
          <a href="#booking" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Book us <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <section id="top" className="relative isolate flex min-h-[760px] items-end overflow-hidden px-5 pb-14 pt-28 sm:min-h-screen sm:px-10 sm:pb-20 lg:px-16">
        <picture className="absolute inset-0 -z-20 block size-full">
          <source media="(max-width: 639px)" srcSet="/hero_mobile.jpg" />
          <img src="/hero-web.jpg" alt="Integration, a three-piece drum and bass artist project" className="size-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,7,8,.68)_0%,rgba(4,7,8,.08)_34%,rgba(4,7,8,.9)_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(211,255,0,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(211,255,0,.15)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mt-10 flex max-w-4xl items-end justify-between gap-8">
            <h1 className="font-display text-6xl font-black uppercase leading-[.82] tracking-[-0.07em] text-white sm:text-8xl lg:text-[9rem]">Driven By<br /><span className="text-primary">Drum &amp; Bass</span></h1>
            <a href="#music" className="hidden shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:flex">Explore <ArrowDownRight className="text-primary" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="music" className="border-b border-border px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex items-end justify-between gap-6"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">01 / Latest transmission</p><h2 className="whitespace-nowrap font-display text-5xl font-black uppercase leading-none tracking-[-0.07em] sm:text-8xl">Listen <span className="text-muted-foreground">closer</span></h2></div><span className="hidden pb-2 font-mono text-xs text-muted-foreground sm:block">[ 01 — 03 ]</span></div>
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div className="border-l border-primary pl-5"><p className="font-display text-3xl font-bold uppercase leading-tight">Integration Radio<br /><span className="text-primary">Episode 01</span></p><p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Original cuts, rolling basslines, and the sounds shaping our world right now.</p><div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"><Play className="size-3 fill-primary text-primary" aria-hidden="true" /> Soundcloud exclusive</div></div><div className="overflow-hidden rounded-sm border border-border bg-card p-1 shadow-[0_0_60px_rgba(211,255,0,.06)]"><iframe title="Integration Radio - Episode 1 on SoundCloud" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2412328920&color=%2308100c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" /></div></div>
        </div>
      </section>

      <section id="shows" className="px-5 py-20 sm:px-10 sm:py-32 lg:px-16"><div className="mx-auto max-w-[1440px]"><div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">02 / Live frequency</p><h2 className="max-w-full font-display text-5xl font-black uppercase leading-[.88] tracking-[-0.07em] sm:whitespace-nowrap sm:text-8xl">Catch us <span className="text-muted-foreground">outside</span></h2></div><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Find us in the dark.</p></div><div className="border-t border-border">{shows.map((show) => <div key={show.date} className="group grid gap-5 border-b border-border py-6 text-left transition-colors hover:bg-card sm:grid-cols-[.75fr_1.5fr_1fr_1fr] sm:items-center sm:gap-4 sm:px-4 sm:py-7"><div><span className="font-mono text-sm text-primary">{show.date}</span></div><div><span className="font-display text-3xl font-bold uppercase tracking-tight">{show.name}</span></div><div><span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{show.location}</span></div><div>{show.ticketLink ? <a href={show.ticketLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 border border-primary px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Buy Ticket <ArrowUpRight className="size-3" aria-hidden="true" /></a> : <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{show.status}</span>}</div></div>)}</div></div></section>

      <footer id="contact" className="border-t border-border bg-card px-5 py-12 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><a href="#top" className="font-display text-2xl font-black tracking-[-0.08em]">INTEGRATION</a><p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">Keep the frequency alive. Follow the project and never miss a transmission.</p><div className="mt-8 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.2em]"><a className="transition-colors hover:text-primary" href="https://facebook.com/profile.php?id=61594385967054" target="_blank" rel="noreferrer">Facebook</a><a className="transition-colors hover:text-primary" href="https://instagram.com/integration_ofc" target="_blank" rel="noreferrer">Instagram</a><a className="transition-colors hover:text-primary" href="https://youtube.com/@integration_ofc" target="_blank" rel="noreferrer">YouTube</a><a className="transition-colors hover:text-primary" href="https://soundcloud.com/pasindu-nimanka-184504832" target="_blank" rel="noreferrer">Soundcloud</a></div></div><div id="booking"><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">03 / Book Integration</p><BookingForm /></div></div><div className="mx-auto mt-16 flex max-w-[1440px] justify-between border-t border-border pt-5 text-[9px] uppercase tracking-[0.18em] text-muted-foreground"><span>© 2026 Integration</span><span>Built for sound systems</span></div></footer>
    </main>
  )
}
