import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Code2, Layers3, ShoppingBag, Smartphone, Sparkles, Menu, X, Github, Instagram, Mail, MapPin, CheckCircle2, Zap } from 'lucide-react';
import './style.css';

const projects = [
  { n: '01', type: 'RESTAURANT EXPERIENCE', title: 'Maison — Restaurant website', desc: 'An elegant digital presence for a modern restaurant, with a menu, reservations and location details.', tags: ['React', 'Responsive UI'], visual: 'restaurant' },
  { n: '02', type: 'E-COMMERCE CONCEPT', title: 'NOVA — Online store', desc: 'A clean shopping experience designed to make product discovery simple and enjoyable.', tags: ['React', 'E-commerce'], visual: 'store' },
  { n: '03', type: 'REAL ESTATE CONCEPT', title: 'ESTATE — Property platform', desc: 'A polished property browsing concept with clear listings and intuitive search.', tags: ['Web app', 'Dashboard'], visual: 'estate' }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const close = () => setMenuOpen(false);
  const email = 'nexorateam.contact01@gmail.com'; // Replace with your real business email.
  const whatsapp = '212654744993'; // Replace with your WhatsApp number, country code included.

  return <div className="app">
    <div className="noise" />
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={close} aria-label="NEXORA TEAM home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NEXORA <b>TEAM</b></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={close}>Services</a>
          <a href="#work" onClick={close}>Our work</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#team" onClick={close}>Our Team</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-cta mobile-cta" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={16}/></a>
        </div>
        <a className="nav-cta desktop-cta" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> INDEPENDENT WEB DEVELOPMENT TEAM <span className="eyebrow-line"/></div>
          <h1>We build<br/><span>digital futures.</span></h1>
          <p className="hero-text">We design and develop modern websites and digital experiences that help ambitious businesses move forward.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Let’s work together <ArrowUpRight size={18}/></a>
            <a className="text-link" href="#work">Explore our work <span>↓</span></a>
          </div>
          <div className="hero-meta"><span><CheckCircle2 size={15}/> Thoughtful design</span><span><CheckCircle2 size={15}/> Clean development</span><span><CheckCircle2 size={15}/> Worldwide collaboration</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract digital 3D visual">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-glow"/>
          <div className="art-core"><span>N</span><i/></div>
          <div className="floating-card card-top"><span className="tiny-dot"/> DIGITAL CRAFT</div>
          <div className="floating-card card-bottom"><Code2 size={16}/> <span>Ideas into interfaces</span></div>
          <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
        </div>
        <div className="hero-bottom"><span>BASED IN MOROCCO</span><span className="scroll-line"/> <span>WORKING WORLDWIDE</span><span className="hero-index">01 / 04</span></div>
      </section>

      <section className="intro-strip"><div className="container strip-inner"><span>DESIGN</span><i>✳</i><span>DEVELOPMENT</span><i>✳</i><span>DIGITAL GROWTH</span><i>✳</i><span>DESIGN</span></div></section>

      <section className="section container" id="services">
        <div className="section-head"><div><div className="eyebrow">WHAT WE DO <span className="eyebrow-line"/></div><h2>Digital solutions,<br/><span>built with purpose.</span></h2></div><p>From a first online presence to a custom web platform, we bring design and development together to create useful digital products.</p></div>
        <div className="services-grid">
          <article className="service-card"><div className="service-icon"><Code2/></div><span className="service-no">01 / DEVELOPMENT</span><h3>Website development</h3><p>Fast, responsive websites that communicate your value and make it easy for customers to connect with you.</p><a href="#contact" aria-label="Discuss website development"><ArrowUpRight/></a></article>
          <article className="service-card"><div className="service-icon"><ShoppingBag/></div><span className="service-no">02 / COMMERCE</span><h3>E-commerce solutions</h3><p>Thoughtful online store experiences that help you present products and manage customer orders.</p><a href="#contact" aria-label="Discuss ecommerce"><ArrowUpRight/></a></article>
          <article className="service-card"><div className="service-icon"><Layers3/></div><span className="service-no">03 / WEB APPS</span><h3>Custom web applications</h3><p>Useful dashboards, admin panels and web applications tailored to the way your business works.</p><a href="#contact" aria-label="Discuss web applications"><ArrowUpRight/></a></article>
          <article className="service-card"><div className="service-icon"><Smartphone/></div><span className="service-no">04 / EXPERIENCE</span><h3>UI & responsive design</h3><p>Clear interfaces and consistent experiences across mobile, tablet and desktop screens.</p><a href="#contact" aria-label="Discuss UI design"><ArrowUpRight/></a></article>
        </div>
      </section>

      <section className="work-section" id="work"><div className="container section">
        <div className="section-head"><div><div className="eyebrow">SELECTED CONCEPTS <span className="eyebrow-line"/></div><h2>Work that makes<br/><span>ideas feel real.</span></h2></div><p>A preview of the kind of digital experiences we can create. These are concept projects, not commissioned client work.</p></div>
        <div className="projects">{projects.map(p => <article className="project" key={p.n}>
          <div className={`project-visual ${p.visual}`}>
            <div className="mock-browser"><div className="browser-top"><span/><span/><span/><b>{p.visual === 'restaurant' ? 'MAISON' : p.visual === 'store' ? 'NOVA / OBJECTS' : 'ESTATE'}</b></div>
              {p.visual === 'restaurant' && <div className="restaurant-mock"><small>GOOD FOOD. GOOD MOOD.</small><strong>A taste<br/>of something<br/><em>beautiful.</em></strong><div className="mock-pill">EXPLORE MENU ↗</div></div>}
              {p.visual === 'store' && <div className="store-mock"><small>NEW COLLECTION / 2026</small><strong>Objects for<br/>everyday living.</strong><div className="store-items"><i/><i/><i/></div></div>}
              {p.visual === 'estate' && <div className="estate-mock"><small>FIND YOUR PLACE</small><strong>Space to<br/>belong.</strong><div className="estate-house"/></div>}
            </div>
          </div>
          <div className="project-info"><div><span className="project-type">{p.n} — {p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="project-arrow"><ArrowUpRight/></span></div>
        </article>)}</div>
      </div></section>

      <section className="section about-section container" id="about">
        <div className="about-visual"><div className="about-big">3<span>.</span></div><div className="about-caption">MINDS. ONE TEAM.<br/>BUILT TO CREATE.</div><div className="about-orbit"/></div>
        <div className="about-copy"><div className="eyebrow">A LITTLE ABOUT US <span className="eyebrow-line"/></div><h2>Small team.<br/><span>Big ambition.</span></h2><p>NEXORA TEAM is an independent web development team from Morocco. We combine frontend craft, backend thinking and a collaborative mindset to help businesses build a stronger digital presence.</p><div className="values"><div><Zap/><span><b>Practical</b><small>Solutions focused on real needs.</small></span></div><div><Sparkles/><span><b>Detail-minded</b><small>Care in every screen and interaction.</small></span></div></div><a className="text-link" href="#contact">Get to know our process <span>→</span></a></div>
      </section>

<section className="section team-section container" id="team">
  <div className="section-head">
    <div>
      <div className="eyebrow">
        THE PEOPLE BEHIND NEXORA
        <span className="eyebrow-line"/>
      </div>
      <h2>Meet our<br/><span>team.</span></h2>
    </div>
    <p>
      Three passionate Full-Stack Developers,
      one shared vision: building meaningful
      digital experiences.
    </p>
  </div>

  <div className="team-grid">
    {[
      { initials: 'ZT', name: 'ZAKARYA TOUIL' },
      { initials: 'AA', name: 'AYYADA ANAS' },
      { initials: 'GR', name: 'GHITONI REDA' }
    ].map(member => (
      <article className="team-card" key={member.initials}>
        <div className="team-avatar">
          {member.initials}
        </div>
        <span className="team-role">FULL-STACK DEVELOPER</span>
        <h3>{member.name}</h3>
        <p>Building modern digital solutions with creativity and precision.</p>
      </article>
    ))}
  </div>
</section>
      <section className="process-section"><div className="container section"><div className="eyebrow">HOW WE WORK <span className="eyebrow-line"/></div><h2>Clear process.<br/><span>Better outcomes.</span></h2><div className="process-grid"><div><b>01</b><h3>Discover</h3><p>We listen, ask questions and understand your goals.</p></div><div><b>02</b><h3>Plan & design</h3><p>We define the scope and shape a clear direction.</p></div><div><b>03</b><h3>Build</h3><p>We develop, test and keep you updated.</p></div><div><b>04</b><h3>Launch</h3><p>We deliver your project and help you take it live.</p></div></div></div></section>

      <section className="contact-section container" id="contact"><div className="contact-panel"><div className="contact-glow"/><div className="eyebrow">HAVE A PROJECT IN MIND? <span className="eyebrow-line"/></div><h2>Let’s make<br/><span>it happen.</span></h2><p>Tell us what you’re building. We’d love to hear about your idea and explore how we can help.</p><div className="contact-actions"><a className="btn btn-primary" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18}/></a><a className="contact-email" href={`mailto:${email}`}><Mail size={17}/> {email}</a></div><div className="contact-foot"><span><MapPin size={14}/> Morocco · Available worldwide</span><span>LET’S BUILD WHAT’S NEXT.</span></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NEXORA <b>TEAM</b></span></a><span>© 2026 NEXORA TEAM. ALL RIGHTS RESERVED.</span><div className="socials"><a href={`mailto:${email}`} aria-label="Email"><Mail size={17}/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a></div></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);