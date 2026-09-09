import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, Check, ChevronRight, Clock3, Mail, MapPin, Menu, MoveUpRight, Phone, Sparkles, X } from 'lucide-react'
import aboutClinic from './about-clinic.jpg'
import dentalCheckup from './dental-checkup.jpg'
import patientCare from './patient-care.png'
const navigation = ['Treatments', 'About', 'Our Team', 'Patient Care', 'Contact']

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Dublin Dental Clinic home"><span className="wordmark-mark">D</span><span>Dublin Dental<br />Clinic</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}</nav>
    <a className="button button-small header-cta" href="#contact">Book Appointment <ArrowUpRight size={16} strokeWidth={1.8} /></a>
    <button className="menu-trigger" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu-top"><span className="eyebrow">Dublin / Ireland</span><button className="menu-trigger menu-trigger-close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button></div>
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}<MoveUpRight size={18} /></a>)}</nav>
      <a className="button mobile-menu-cta" href="#contact" onClick={() => setMenuOpen(false)}>Book an Appointment <ArrowUpRight size={16} /></a>
      <p className="mobile-menu-note">Private dentistry · Dublin 1</p>
    </div>
  </header>
}

function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    setPointer({ x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 })
  }
  return <main id="top" className="hero" onPointerMove={handlePointerMove} onPointerLeave={() => setPointer({ x: 0, y: 0 })}>
    <div className="hero-atmosphere atmosphere-one" /><div className="hero-atmosphere atmosphere-two" />
    <div className="hero-content">
      <p className="eyebrow hero-eyebrow">Private dentistry <span /> Dublin 1</p>
      <h1>Exceptional dentistry.<br /><em>Designed around you.</em></h1>
      <p className="hero-intro">Modern dental care with a personal approach, delivered in the heart of Dublin.</p>
      <div className="hero-actions"><a className="button" href="#contact">Book an Appointment <ArrowUpRight size={17} /></a><a className="text-link" href="#treatments">Explore Treatments <span className="text-link-line" /></a></div>
      <div className="location"><span className="location-pin" />32 North Frederick Street, Dublin 1</div>
    </div>
    <div className="visual-stage" style={{ '--pointer-x': `${pointer.x}`, '--pointer-y': `${pointer.y}` } as React.CSSProperties}>
      <div className="studio-scene">
        <div className="studio-halo" />
        <div className="glass-slab slab-back" />
        <div className="glass-slab slab-middle" />
        <div className="glass-ring ring-back" />
        <div className="glass-sphere sphere-champagne" />
        <div className="chrome-sphere" />
        <div className="photo-shadow" />
        <div className="photo-panel"><div className="photo-panel-rim" /><img src={dentalCheckup} alt="Dentist consulting a patient in a modern dental clinic" /><div className="photo-panel-wash" /><div className="photo-caption"><span>DDC / 01</span><span>Care, considered</span></div></div>
        <div className="glass-ring ring-front"><span className="ring-glint" /></div>
        <div className="emerald-object" />
        <div className="studio-card care-card"><span className="card-number">01</span><span>Personalised<br /><strong>care</strong></span></div>
        <div className="studio-card modern-card"><span className="card-dot" />Modern dentistry</div>
      </div>
    </div>
  </main>
}

const treatments = [
  ['01', 'Cosmetic Dentistry', 'Refined care for a confident, natural smile.', Sparkles],
  ['02', 'Orthodontics', 'Thoughtful alignment with a considered approach.', ChevronRight],
  ['03', 'Dental Implants', 'Restoring comfort, function and balance.', Check],
  ['04', 'Restorative Treatments', 'Modern solutions shaped around your needs.', CalendarDays],
  ['05', 'Dentures', 'Comfortable, considered support for everyday life.', Sparkles],
  ['06', 'Preventative Treatments', 'Helping you protect your long-term oral health.', Check],
  ['07', 'Endodontics', 'Specialist care for the health within your tooth.', ChevronRight],
  ['08', 'Hygienist Services', 'A calm, thorough approach to ongoing care.', Sparkles],
] as const

function Treatments() {
  return <section className="clinic-section treatments-section" id="treatments">
    <div className="section-heading treatments-heading"><div><p className="eyebrow">01 / Treatments</p><h2>Care with a <em>clear purpose.</em></h2></div><p className="section-lede">A considered range of dental treatments, delivered with precision and a personal point of view.</p></div>
    <div className="treatment-grid">{treatments.map(([number, title, description, Icon]) => <a className="treatment-card" href="#contact" key={title}><span className="treatment-number">{number}</span><span className="treatment-icon"><Icon size={22} strokeWidth={1.25} /></span><span className="treatment-title">{title}</span><span className="treatment-description">{description}</span><span className="treatment-arrow"><ArrowUpRight size={17} /></span></a>)}</div>
  </section>
}

function About() {
  return <section className="clinic-section about-section" id="about">
    <div className="about-visual"><div className="about-backplate" /><div className="about-frame"><img src={aboutClinic} alt="Dental professionals providing care in a modern clinic" /><span className="about-image-label">DDC / 02<br /><strong>Considered care</strong></span></div><div className="about-float"><span className="float-mark">+</span><span>Patient<br /><strong>first</strong></span></div></div>
    <div className="about-copy"><p className="eyebrow">02 / About the clinic</p><h2>Modern dentistry, <em>made personal.</em></h2><p>At Dublin Dental Clinic, the experience begins with listening. Our approach is patient-focused, combining a modern clinical environment with clear communication and care that feels considered at every stage.</p><p>From your first conversation through to ongoing treatment, we create space for questions, thoughtful decisions and a calm, comfortable visit.</p><a className="editorial-link" href="#contact">Talk to the clinic <ArrowUpRight size={17} /></a></div>
  </section>
}

function WhyChoose() {
  const points = [['01', 'Central Dublin', 'Conveniently located on North Frederick Street in Dublin 1.'], ['02', 'Broad treatment range', 'A considered selection of services for different dental needs.'], ['03', 'Modern environment', 'A contemporary setting designed around a calm patient experience.'], ['04', 'Personalised care', 'Clear, attentive communication from the first conversation.']]
  return <section className="clinic-section why-section" id="patient-care"><div className="section-heading"><div><p className="eyebrow">03 / The difference</p><h2>Why choose <em>Dublin Dental Clinic?</em></h2></div><p className="section-lede">A straightforward, human approach to looking after your smile.</p></div><div className="why-grid">{points.map(([number, title, description]) => <article className="why-card" key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><div className="why-note"><MapPin size={18} strokeWidth={1.4} /><span>32 North Frederick Street <strong>Dublin 1</strong></span><a href="#contact">Find out more <ArrowUpRight size={15} /></a></div></section>
}

function Feature() {
  return <section className="feature-section" aria-label="A considered clinic experience"><div className="feature-copy"><p className="eyebrow">04 / A considered experience</p><h2>Space to feel <em>at ease.</em></h2><p>Every detail of your visit is shaped to make modern dental care feel clear, comfortable and unhurried.</p></div><div className="feature-stage"><div className="feature-glow" /><div className="feature-panel feature-panel-back" /><div className="feature-panel feature-panel-front"><img src={patientCare} alt="Patient care at Dublin Dental Clinic" /></div><div className="feature-orbit" /><div className="feature-chip"><span>DDC</span> Care, considered</div><div className="feature-disc" /></div></section>
}

function Team() {
  return <section className="clinic-section team-section" id="our-team"><div><p className="eyebrow">05 / Our team</p><h2>A steady hand. <em>A personal approach.</em></h2></div><article className="team-member"><div className="team-avatar">CK</div><div><p className="eyebrow">Principal Surgeon</p><h3>Dr Clair Kilgarriff</h3><p>Providing thoughtful, patient-focused dental care at Dublin Dental Clinic.</p></div><ArrowUpRight size={21} /></article></section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="contact-intro"><p className="eyebrow">06 / Contact & appointments</p><h2>Let’s begin with a <em>conversation.</em></h2><p>For appointments and enquiries, contact the clinic directly.</p><div className="contact-actions"><a className="button" href="tel:018745418">Call the clinic <Phone size={16} /></a><a className="editorial-link" href="mailto:surgerydental@hotmail.com">Send an email <ArrowUpRight size={17} /></a></div></div><div className="contact-details"><div className="contact-detail"><MapPin size={19} /><div><strong>Dublin Dental Clinic</strong><span>32 North Frederick Street<br />Dublin 1<br />D01 AK64<br />Ireland</span></div></div><div className="contact-detail"><Phone size={19} /><div><strong>01 874 5418<br />01 874 9859</strong></div></div><div className="contact-detail"><Mail size={19} /><div><a href="mailto:surgerydental@hotmail.com">surgerydental@hotmail.com</a></div></div><div className="contact-detail"><Clock3 size={19} /><div><strong>Opening hours</strong><span>Monday–Thursday: 08:00–17:00<br />Friday: 08:00–16:00</span></div></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top" aria-label="Back to top"><span className="wordmark-mark">D</span><span>Dublin Dental<br />Clinic</span></a><p>Private dentistry<br />Dublin 1, Ireland</p><a className="footer-top" href="#top">Back to top <ArrowUpRight size={16} /></a><small>© Dublin Dental Clinic</small></footer>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { document.body.classList.toggle('menu-is-open', menuOpen); return () => document.body.classList.remove('menu-is-open') }, [menuOpen])
  return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Hero /><div className="site-sections"><Treatments /><About /><WhyChoose /><Feature /><Team /><Contact /><Footer /></div></>
}