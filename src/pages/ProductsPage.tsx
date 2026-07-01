import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  ExternalLink,
  Globe2,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  SUPPORT_EMAIL,
  allCatalogProducts,
  knowledgeLabProducts,
  opportunityLabProducts,
  resonanceKitProducts,
  wellbeingLabProducts,
  type Product,
  type ProductStatus,
} from '../data/products';

const statusTone: Record<ProductStatus, string> = {
  Available: 'status-available',
  Published: 'status-available',
  Reserve: 'status-reserve',
  'Under audit': 'status-audit',
  Discovery: 'status-discovery',
  Research: 'status-research',
};

const catalogLineLinks = [
  {
    href: '#resonance-kits',
    number: '01',
    label: 'Resonance Kits',
    detail: 'Source-code products',
  },
  {
    href: '#code-labs',
    number: '02',
    label: 'Knowledge Code Labs',
    detail: 'Runnable technical labs',
  },
  {
    href: '#opportunity-lab',
    number: '03',
    label: 'Opportunity Lab',
    detail: 'Market-led product bets',
  },
  {
    href: '#wellbeing-lab',
    number: '04',
    label: 'Wellbeing Lab',
    detail: 'Sound and wellbeing research',
  },
];

const catalogStatusLegend = [
  { label: 'Available / Published', tone: 'status-available' },
  { label: 'Reserve', tone: 'status-reserve' },
  { label: 'Under audit', tone: 'status-audit' },
  { label: 'Discovery / Research', tone: 'status-discovery' },
];

const CatalogProductCard = ({ product }: { product: Product }) => (
  <article className="catalog-card">
    <div className="catalog-card__top">
      <div className="product-meta">
        <span className="product-tag">{product.category}</span>
        <span className={`product-status ${statusTone[product.status]}`}>{product.status}</span>
      </div>
      {product.price ? <span className="catalog-price">{product.price}</span> : null}
    </div>

    <h3 className="product-title">{product.name}</h3>
    <p className="product-copy">{product.description}</p>

    <div className="catalog-audience">
      <p className="trust-label">Best for</p>
      <p>{product.audience}</p>
    </div>

    <div className="catalog-card__footer">
      <span className="catalog-platform">{product.platform}</span>
      {product.href ? (
        <a href={product.href} target="_blank" rel="noreferrer" className="external-badge">
          {product.ctaLabel ?? 'View product'}
          <ExternalLink size={13} />
        </a>
      ) : (
        <span className="catalog-muted">Not publicly listed yet</span>
      )}
    </div>
  </article>
);

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Products Catalog — IN RESONANCE WELL';
  }, []);

  const availableCount = allCatalogProducts.filter((product) =>
    ['Available', 'Published'].includes(product.status),
  ).length;
  const reserveCount = allCatalogProducts.filter((product) => product.status === 'Reserve').length;
  const auditCount = allCatalogProducts.filter((product) => product.status === 'Under audit').length;
  const exploratoryCount = allCatalogProducts.filter((product) =>
    ['Discovery', 'Research'].includes(product.status),
  ).length;

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
        <a href="/" className="brand-link">
          <img src="/assets/logo.png" alt="IN RESONANCE WELL" className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-name">IN RESONANCE WELL</span>
            <span className="brand-subtitle">Product Studio</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Catalog navigation">
          <a href="/">Home</a>
          <a href="#resonance-kits">Kits</a>
          <a href="#code-labs">Code Labs</a>
          <a href="#opportunity-lab">Opportunity</a>
          <a href="#wellbeing-lab">Wellbeing</a>
          <a href="#audit-queue">Audit Queue</a>
        </nav>

        <a href={`mailto:${SUPPORT_EMAIL}`} className="support-link">
          <Mail size={13} />
          Support
        </a>
      </header>

      <main id="top">
        <section className="catalog-hero">
          <div className="catalog-hero__content">
            <a href="/" className="back-link">
              <ArrowLeft size={15} />
              Back to company site
            </a>

            <div className="eyebrow-pill">
              <Boxes size={13} />
              <span>Products catalog</span>
            </div>

            <h1 className="hero-title">A cleaner shelf for current and upcoming products.</h1>
            <p className="hero-copy">
              This catalog separates current public products, reserve candidates, discovery
              bets and research prototypes across the company’s four product lines.
            </p>

            <div className="catalog-line-index" aria-label="Product line index">
              {catalogLineLinks.map((line) => (
                <a key={line.href} href={line.href} className="catalog-line-card">
                  <span className="catalog-line-card__number">{line.number}</span>
                  <span className="catalog-line-card__label">{line.label}</span>
                  <span className="catalog-line-card__detail">{line.detail}</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="catalog-directory-panel" aria-label="Catalog summary and status guide">
            <div>
              <p className="trust-label">Catalog snapshot</p>
              <h2 className="catalog-directory-title">Current shelf state</h2>
            </div>

            <div className="catalog-stats catalog-stats--compact" aria-label="Catalog summary">
              <div className="catalog-stat">
                <span>{availableCount}</span>
                <p>Public</p>
              </div>
              <div className="catalog-stat">
                <span>{reserveCount}</span>
                <p>Reserve</p>
              </div>
              <div className="catalog-stat">
                <span>{auditCount}</span>
                <p>Audit</p>
              </div>
              <div className="catalog-stat">
                <span>{exploratoryCount}</span>
                <p>Discovery</p>
              </div>
            </div>

            <div className="catalog-status-legend">
              <p className="trust-label">Status guide</p>
              <div className="catalog-status-list">
                {catalogStatusLegend.map((item) => (
                  <span key={item.label} className={`product-status ${item.tone}`}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="resonance-kits" className="site-section product-line-section">
          <div className="catalog-section-heading">
            <div>
              <p className="section-eyebrow">Resonance Kits</p>
              <h2 className="section-title">Source-code products and reserve kits.</h2>
            </div>
            <p>
              Public kits link to Lemon Squeezy. Reserve and audit candidates stay visible as
              product inventory, but are not presented as purchasable until packaged and verified.
            </p>
          </div>

          <div className="catalog-grid">
            {resonanceKitProducts.map((product) => (
              <CatalogProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section id="code-labs" className="site-section product-line-section">
          <div className="catalog-section-heading">
            <div>
              <p className="section-eyebrow">Knowledge Code Labs</p>
              <h2 className="section-title">Runnable technical learning products.</h2>
            </div>
            <p>
              Compact code labs stay separate from starter kits so buyers understand whether
              they are buying a learning product or an application foundation.
            </p>
          </div>

          <div className="catalog-grid catalog-grid--two">
            {knowledgeLabProducts.map((product) => (
              <CatalogProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section id="opportunity-lab" className="site-section product-line-section">
          <div className="catalog-section-heading">
            <div>
              <p className="section-eyebrow">Opportunity Lab</p>
              <h2 className="section-title">Small product bets before they become product lines.</h2>
            </div>
            <p>
              This lane captures the company’s independent-developer engine: find paid pain,
              ship small, and keep only the product bets that earn real demand.
            </p>
          </div>

          <div className="catalog-grid catalog-grid--single">
            {opportunityLabProducts.map((product) => (
              <CatalogProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section id="wellbeing-lab" className="site-section product-line-section">
          <div className="catalog-section-heading">
            <div>
              <p className="section-eyebrow">Wellbeing Lab</p>
              <h2 className="section-title">Sound, wellbeing and future creator tools.</h2>
            </div>
            <p>
              This lane is intentionally marked as research until a sharper commercial wedge is
              validated. Flow stays visible as context, not as a current flagship product.
            </p>
          </div>

          <div className="catalog-grid catalog-grid--single">
            {wellbeingLabProducts.map((product) => (
              <CatalogProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section id="audit-queue" className="site-section">
          <div className="trust-panel">
            <div>
              <p className="section-eyebrow">Audit queue</p>
              <h2 className="section-title">More kits exist, but they earn their way onto the shelf.</h2>
              <p className="trust-copy">
                The broader starter-kit backlog is treated as raw inventory until each candidate
                passes packaging, documentation, build, buyer-view and support-boundary checks.
              </p>
            </div>

            <div className="trust-card">
              <span className="trust-icon">
                <ShieldCheck size={23} />
              </span>
              <h3 className="trust-title">Catalog rule</h3>
              <ul className="principle-list">
                <li>Homepage shows only focus products.</li>
                <li>Catalog shows public products and named reserve candidates.</li>
                <li>Unverified backlog stays internal until audited.</li>
                <li>Checkout links only appear when the product is actually listed.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="catalog-cta">
            <div>
              <p className="section-eyebrow">Need help choosing?</p>
              <h2 className="catalog-cta__title">Start with the product line that matches your job.</h2>
            </div>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="button-primary">
              Contact support
              <ArrowRight size={16} />
            </a>
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

      <Sparkles className="catalog-spark" size={18} aria-hidden="true" />
    </div>
  );
};

export default ProductsPage;
