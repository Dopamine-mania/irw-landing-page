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
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import {
  FLOW_URL,
  LEMON_STOREFRONT_URL,
  SUPPORT_EMAIL,
  knowledgeLabPipeline,
  knowledgeLabProducts,
  resonanceKitPipeline,
  resonanceKitProducts,
  type Product,
} from '../data/products';

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
    icon: Rocket,
    eyebrow: 'Opportunity Lab',
    title: 'Fast AI-native product bets',
    description:
      'Small, focused web tools, micro-SaaS and future iOS apps built around market pain that shows real willingness to pay.',
    href: '#opportunity-lab',
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

const principles = [
  'Verification-backed product packages',
  'Clear setup and support boundaries',
  'No medical, legal or financial outcome claims',
  'Checkout and delivery through trusted platforms',
];

const opportunitySteps = [
  {
    title: 'Find paid pain',
    description:
      'Track real workflow friction in communities, operators and niche buyers before committing to a build.',
  },
  {
    title: 'Ship small',
    description:
      'Turn validated pain into focused AI-native tools, micro-SaaS, web utilities or iOS experiments.',
  },
  {
    title: 'Graduate or kill',
    description:
      'Keep winners as products, turn useful patterns into kits, and stop ideas that do not earn attention.',
  },
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

const ProductCard = ({
  product,
}: {
  product: Product;
}) => (
  <article className="product-card">
    <div>
      <div className="product-meta">
        <span className="product-tag">{product.category}</span>
        <span className="product-status">{product.status}</span>
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-copy">{product.description}</p>
    </div>
    {product.href ? (
      <ExternalLinkBadge href={product.href}>View on {product.platform}</ExternalLinkBadge>
    ) : null}
  </article>
);

const PipelinePanel = ({ items, label }: { items: string[]; label: string }) => (
  <div className="pipeline-panel">
    <div>
      <p className="pipeline-label">{label}</p>
      <h3 className="pipeline-title">Reserved shelf space for what comes next.</h3>
    </div>
    <div className="pipeline-list">
      {items.map((item) => (
        <span key={item} className="pipeline-pill">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const LandingPage = () => {
  const homepageKits = resonanceKitProducts.filter((product) => product.status === 'Available');

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
          <a href="#opportunity-lab">Opportunity</a>
          <a href="#wellbeing-lab">Wellbeing Lab</a>
          <a href="#trust">Trust</a>
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
              We build source-code starter kits, technical code labs, opportunity-led
              AI products and sound/wellbeing experiments that turn real workflows into
              usable software.
            </p>

            <div className="hero-actions">
              <a href="/products" className="button-primary">
                Browse catalog
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
            title="Four lanes, one company home."
            description="The company site is the trust layer. Lemon Squeezy and Gumroad handle current checkout, while new product bets start here as they prove demand."
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

          <div className="section-toolbar section-toolbar--center">
            <p>Need the fuller inventory view?</p>
            <a href="/products" className="text-link">
              Open product catalog
            </a>
          </div>
        </section>

        <section id="resonance-kits" className="site-section product-line-section">
          <SectionHeading
            eyebrow="Resonance Kits"
            title="Starter kits get their own shelf."
            description="This lane is for source-code products. The homepage shows the current flagship kits and reserves room for future audited releases without turning the page into a giant archive."
          />

          <div className="section-toolbar">
            <p>Available now through Lemon Squeezy.</p>
            <a href={LEMON_STOREFRONT_URL} target="_blank" rel="noreferrer" className="text-link">
              View storefront
            </a>
          </div>

          <div className="product-grid product-grid--three">
            {homepageKits.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <PipelinePanel items={resonanceKitPipeline} label="Kit pipeline" />
        </section>

        <section id="code-labs" className="site-section product-line-section">
          <SectionHeading
            eyebrow="Knowledge Code Labs"
            title="Technical learning products stay separate."
            description="This lane is for compact, runnable technical products based on engineering, scientific computing, CFD, audio DSP and future research-to-code material."
          />

          <div className="section-toolbar">
            <p>Published now through Gumroad.</p>
            <span className="section-note">More labs can be added without mixing them into the kit shelf.</span>
          </div>

          <div className="product-grid product-grid--two">
            {knowledgeLabProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <PipelinePanel items={knowledgeLabPipeline} label="Lab pipeline" />
        </section>

        <section id="opportunity-lab" className="site-section product-line-section">
          <div className="opportunity-panel">
            <div className="opportunity-intro">
              <div className="eyebrow-pill">
                <Target size={13} />
                <span>Opportunity Lab</span>
              </div>
              <h2 className="opportunity-title">A practical engine for new product bets.</h2>
              <p className="opportunity-copy">
                Some products start from existing assets. Others start from fresh market
                pain. Opportunity Lab is where we test small, useful software ideas quickly:
                web tools, workflow products, micro-SaaS and future iOS apps when the signal is real.
              </p>
            </div>

            <div className="opportunity-steps">
              {opportunitySteps.map((step, index) => (
                <article key={step.title} className="opportunity-step">
                  <span className="opportunity-step__number">0{index + 1}</span>
                  <h3 className="opportunity-step__title">{step.title}</h3>
                  <p className="opportunity-step__copy">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="wellbeing-lab" className="site-section product-line-section">
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

        <section id="trust" className="site-section">
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
