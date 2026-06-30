export const SUPPORT_EMAIL = 'support@inresonancewell.com';
export const LEMON_STOREFRONT_URL = 'https://resonance-kits.lemonsqueezy.com';
export const CFD_GUMROAD_URL = 'https://chen77studio.gumroad.com/l/data-driven-cfd-foundations';
export const AUDIO_DSP_GUMROAD_URL = 'https://chen77studio.gumroad.com/l/audio-dsp-blueprint-code-lab';
export const FLOW_URL = 'https://flow.inresonancewell.com';

export type ProductStatus = 'Available' | 'Published' | 'Reserve' | 'Under audit';

export type ProductLine = 'Resonance Kits' | 'Knowledge Code Labs';

export type Product = {
  name: string;
  line: ProductLine;
  category: string;
  description: string;
  platform: 'Lemon Squeezy' | 'Gumroad' | 'Internal reserve';
  href?: string;
  status: ProductStatus;
  price?: string;
  audience: string;
};

export const resonanceKitProducts: Product[] = [
  {
    name: 'PanelDocket',
    line: 'Resonance Kits',
    category: 'Review workflow',
    description:
      'A review, scoring and approval workflow starter kit for developers building reviewer portals or decision systems.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
    price: '$79',
    audience: 'Developers building reviewer portals, scoring systems, and decision workflows.',
  },
  {
    name: 'WrenchLine Maintenance Hub',
    line: 'Resonance Kits',
    category: 'Operations workflow',
    description:
      'A facility maintenance and work-order workflow starter kit for asset, issue and operations software foundations.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
    price: '$149',
    audience: 'Developers, agencies, and operators building maintenance or work-order tools.',
  },
  {
    name: 'BrandForge Email Template Studio',
    line: 'Resonance Kits',
    category: 'Brand workflow',
    description:
      'A self-hosted brand-compliant email template workflow foundation with brand kits, approvals and audit trails.',
    platform: 'Lemon Squeezy',
    href: LEMON_STOREFRONT_URL,
    status: 'Available',
    price: '$199',
    audience: 'Agencies and technical teams building branded email-template systems.',
  },
  {
    name: 'PatchBay',
    line: 'Resonance Kits',
    category: 'Developer workflow',
    description:
      'A prepared reserve kit for teams that need a cleaner foundation around patching, test visibility, and release workflow hygiene.',
    platform: 'Internal reserve',
    status: 'Reserve',
    audience: 'Developer-tool builders and teams that sell internal engineering workflow software.',
  },
  {
    name: 'DocSight Offline Document Workbench',
    line: 'Resonance Kits',
    category: 'Document workflow',
    description:
      'A reserve document-workbench kit with offline-first positioning. Held back from sale until support and compliance boundaries are tightened.',
    platform: 'Internal reserve',
    status: 'Reserve',
    audience: 'Teams exploring self-hosted document review, processing, and offline workbench tools.',
  },
  {
    name: 'Container Vulnerability Scanner',
    line: 'Resonance Kits',
    category: 'Security workflow',
    description:
      'A security-oriented kit candidate. It stays in the audit queue until proof, support scope, and security wording are strong enough for sale.',
    platform: 'Internal reserve',
    status: 'Under audit',
    audience: 'Developers building security dashboards, scan review workflows, or DevSecOps tooling.',
  },
];

export const knowledgeLabProducts: Product[] = [
  {
    name: 'Data-Driven CFD Foundations',
    line: 'Knowledge Code Labs',
    category: 'CFD / scientific Python',
    description:
      'A compact code lab for technical learners moving from CFD and data-driven modeling concepts into runnable examples.',
    platform: 'Gumroad',
    href: CFD_GUMROAD_URL,
    status: 'Published',
    price: '$19',
    audience: 'Engineering students, CFD learners, and scientific Python users.',
  },
  {
    name: 'Audio DSP Blueprint Code Lab',
    line: 'Knowledge Code Labs',
    category: 'Audio DSP / Python',
    description:
      'A lightweight audio signal processing code lab with runnable examples for spectra, time-frequency analysis and features.',
    platform: 'Gumroad',
    href: AUDIO_DSP_GUMROAD_URL,
    status: 'Published',
    price: '$19',
    audience: 'Audio learners, music-computing students, and signal-processing beginners.',
  },
];

export const resonanceKitPipeline = [
  'Operations and internal-tool kits',
  'Document and offline-workbench kits',
  'Security and developer-workflow kits',
];

export const knowledgeLabPipeline = [
  'Scientific Python mini-labs',
  'Sound and music computing labs',
  'Research-to-code implementation guides',
];

export const allCatalogProducts = [...resonanceKitProducts, ...knowledgeLabProducts];
