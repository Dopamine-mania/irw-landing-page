# IN RESONANCE WELL Company Site

This repository powers the public company website at
`https://www.inresonancewell.com`.

The current V1 direction is a company mother-site: a trust and routing layer for
IN RESONANCE WELL LTD's digital product lines.

## Product lines represented

- **Resonance Kits** — source-code starter kits sold through Lemon Squeezy.
- **Knowledge Code Labs** — technical educational code labs sold through
  Gumroad.
- **Wellbeing Lab** — long-term AI + sound + wellbeing experiments, including
  the Flow prototype.

## Local development

```bash
npm ci
npm run dev
```

## Production build check

```bash
npm run build
```

## Operating rules

1. The website should not handle checkout directly yet.
2. Buyer-facing support email is `support@inresonancewell.com`.
3. Flow should be described as an earlier prototype / research line, not the
   current flagship product.
4. Avoid medical, therapeutic, passive-income or production-certification
   claims unless separately verified.
5. Do not push or deploy changes without explicit owner confirmation.
