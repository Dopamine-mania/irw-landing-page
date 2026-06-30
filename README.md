# IN RESONANCE WELL Company Site

This repository powers the public company website at
`https://www.inresonancewell.com`.

The current V1 direction is a company mother-site: a trust and routing layer for
IN RESONANCE WELL LTD's digital product lines.

## Product lines represented

- **Resonance Kits** — source-code starter kits sold through Lemon Squeezy.
- **Knowledge Code Labs** — technical educational code labs sold through
  Gumroad.
- **Opportunity Lab** — small AI-native product bets, web tools, micro-SaaS and
  future iOS experiments built around validated market pain.
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
3. Homepage product presentation should stay organized by business line:
   Resonance Kits, Knowledge Code Labs, Opportunity Lab, Wellbeing Lab, then
   Trust layer. Do not mix every product into one long undifferentiated grid.
4. Flow should be described as an earlier prototype / research line, not the
   current flagship product.
5. Opportunity Lab should be described as a disciplined validation lane, not
   random opportunism or guaranteed income.
6. Avoid medical, therapeutic, passive-income or production-certification
   claims unless separately verified.
7. Do not push or deploy changes without explicit owner confirmation.
