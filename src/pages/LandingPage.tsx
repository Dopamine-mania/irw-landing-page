import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Code2,
  ExternalLink,
  Globe2,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const SUPPORT_EMAIL = 'support@inresonancewell.com';
const LEMON_STOREFRONT_URL = 'https://resonance-kits.lemonsqueezy.com';
const CFD_GUMROAD_URL = 'https://chen77studio.gumroad.com/l/data-driven-cfd-foundations';
const AUDIO_DSP_GUMROAD_URL = 'https://chen77studio.gumroad.com/l/audio-dsp-blueprint-code-lab';
const FLOW_URL = 'https://flow.inresonancewell.com';

const productLanes = [
  {
    icon: Code2,
    eyebrow: 'Resonance Kits',
    title: 'Source-code starter kits',
    description:
      'Domain-specific application foundations for developers, agencies and technical founders who want more than an empty dashboard.',
    href: '#resonance-kits',
  },
  {
    icon: BookOpen,
    eyebrow: 'Knowledge Code Labs',
    title: 'Runnable technical learning products',
    description:
      'Compact CFD, audio DSP and scientific-computing code labs built around working examples, not vague course promises.',
    href: '#code-labs',
  },
  {
    icon: Beaker,
    eyebrow: 'Wellbeing Lab',
    title: 'AI + sound experiments',
    description:
      'A long-term research lane exploring sound, spatial interfaces and practical digital tools for wellbeing creators.',
    href: '#wellbeing-lab',
  },
];

const featuredProducts = [
  {
    name: 'PanelDocket',
    category: 'Resonance Kits',
    description:
      'A review, scoring and approval workflow starter kit for developers building reviewer portals or decision systems.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
  },
  {
    name: 'WrenchLine Maintenance Hub',
    category: 'Resonance Kits',
    description:
      'A facility maintenance and work-order workflow starter kit for asset, issue and operations software foundations.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
  },
  {
    name: 'BrandForge Email Template Studio',
    category: 'Resonance Kits',
    description:
      'A self-hosted brand-compliant email template workflow foundation with brand kits, approvals and audit trails.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
  },
  {
    name: 'Data-Driven CFD Foundations',
    category: 'Knowledge Code Labs',
    description:
      'A compact code lab for technical learners moving from CFD and data-driven modeling concepts into runnable examples.',
    platform: 'Gumroad',
    href: CFD_GUMROAD_URL,
    status: 'Published',
  },
  {
    name: 'Audio DSP Blueprint Code Lab',
    category: 'Knowledge Code Labs',
    description:
      'A lightweight audio signal processing code lab with runnable examples for spectra, time-frequency analysis and features.',
    platform: 'Gumroad',
    href: AUDIO_DSP_GUMROAD_URL,
    status: 'Published',
  },
];

const principles = [
  'Verification-backed product packages',
  'Clear setup and support boundaries',
  'No medical, legal or financial outcome claims',
  'Checkout and delivery through trusted platforms',
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="section-heading">
    <p className="section-eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    <p className="section-copy">{description}</p>
  </div>
);

const ExternalLinkBadge = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="external-badge">
    {children}
    <ExternalLink size={13} />
  </a>
);

const LandingPage = () => {
  return (
    <div className="site-page">
      <div className="noise-overlay" />

      <div className="site-background" aria-hidden="true">
        <div className="site-background__base" />
        <div className="site-background__glow-one" />
        <div className="site-background__glow-two" />
        <div className="site-background__vignette" />
      </div>

      <header className="site-header">
        <a href="#top" className="brand-link">
          <img src="/assets/logo.png" alt="IN RESONANCE WELL" className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-name">IN RESONANCE WELL</span>
            <span className="brand-subtitle">Product Studio</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#resonance-kits">Kits</a>
          <a href="#code-labs">Code Labs</a>
          <a href="#wellbeing-lab">Wellbeing Lab</a>
        </nav>

        <a href={`mailto:${SUPPORT_EMAIL}`} className="support-link">
          <Mail size={13} />
          Support
        </a>
      </header>

      <main id="top">
        <section className="site-hero">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="hero-content"
          >
            <div className="eyebrow-pill">
              <Sparkles size={13} />
              <span>AI-native independent product studio</span>
            </div>

            <h1 className="hero-title">Practical software products from a focused studio.</h1>

            <p className="hero-copy">
              We build source-code starter kits, technical code labs and sound/wellbeing
              experiments that turn real workflows into usable software.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button-primary">
                Browse products
                <ArrowRight size={16} />
              </a>
              <a href="#resonance-kits" className="button-secondary">
                View Resonance Kits
              </a>
            </div>
          </motion.div>
        </section>

        <section id="products" className="site-section">
          <SectionHeading
            eyebrow="Product lines"
            title="Three lanes, one company home."
            description="The company site is the trust layer. Lemon Squeezy and Gumroad handle checkout, delivery and receipts."
          />

          <div className="lane-grid">
            {productLanes.map((lane) => {
              const Icon = lane.icon;

              return (
                <a key={lane.eyebrow} href={lane.href} className="lane-card">
                  <span className="lane-icon">
                    <Icon size={22} />
                  </span>
                  <p className="card-eyebrow">{lane.eyebrow}</p>
                  <h3 className="lane-title">{lane.title}</h3>
                  <p className="card-copy">{lane.description}</p>
                  <span className="card-arrow">
                    Explore lane
                    <ArrowRight size={14} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section id="resonance-kits" className="site-section">
          <span id="code-labs" className="sr-only">
            Knowledge Code Labs
          </span>
          <SectionHeading
            eyebrow="Featured products"
            title="Current sellable digital products."
            description="Only products with packaging, documentation and clear support boundaries are shown here."
          />

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-meta">
                  <span className="product-tag">{product.category}</span>
                  <span className="product-status">{product.status}</span>
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-copy">{product.description}</p>
                <ExternalLinkBadge href={product.href}>View on {product.platform}</ExternalLinkBadge>
              </article>
            ))}
          </div>
        </section>

        <section className="site-section">
          <div className="trust-panel">
            <div>
              <p className="section-eyebrow">Trust layer</p>
              <h2 className="section-title">A UK-registered digital product company.</h2>
              <p className="trust-copy">
                IN RESONANCE WELL LTD sells digital products through established checkout
                platforms while keeping product scope and support boundaries clear.
              </p>

              <div className="trust-facts">
                <div className="trust-fact">
                  <p className="trust-label">Legal entity</p>
                  <span className="trust-value">IN RESONANCE WELL LTD</span>
                </div>
                <div className="trust-fact">
                  <p className="trust-label">Company number</p>
                  <span className="trust-value">16848374</span>
                </div>
                <div className="trust-fact">
                  <p className="trust-label">Support</p>
                  <a className="trust-value text-link" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>
                </div>
                <div className="trust-fact">
                  <p className="trust-label">Checkout</p>
                  <span className="trust-value">Lemon Squeezy + Gumroad</span>
                </div>
              </div>
            </div>

            <div className="trust-card">
              <span className="trust-icon">
                <ShieldCheck size={23} />
              </span>
              <h3 className="trust-title">How we keep expectations clean</h3>
              <ul className="principle-list">
                {principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="wellbeing-lab" className="site-section">
          <div className="wellbeing-card">
            <div className="wellbeing-card__inner">
              <div>
                <p className="section-eyebrow">Wellbeing Lab</p>
                <h2 className="wellbeing-title">Flow remains a research line.</h2>
              </div>
              <div>
                <p className="wellbeing-copy">
                  Flow is an earlier interactive prototype exploring sound, spatial interfaces
                  and wellbeing experiences. This line is currently treated as a research and
                  validation lab while the company focuses on clean digital product revenue.
                </p>
                <ExternalLinkBadge href={FLOW_URL}>View Flow prototype</ExternalLinkBadge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="footer-location">
            <Globe2 size={15} />
            <span>London, UK</span>
          </div>
          <p>© 2026 IN RESONANCE WELL LTD. Digital products with clear boundaries.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
