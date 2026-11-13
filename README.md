# nextstep

A concept for Angel One's IPO journey.

**Problem:** at the IPO money moment (refund or listing gain), the app gives no next step, so an IPO wins Angel One an account, not an investor.

## What's inside

```
site/                     the web app (static, no build step)
  index.html
  css/                    site, demo and phone styles
  js/rules.js             rules engine: which next steps a user sees
  js/data/answers.js      Ask Angel answers (English + Hindi) and today's answers
  js/data/evals.js        eval table shown in the app
  js/demo/                phone screens, live panel, Ask Angel sheet
  js/landing.js, router.js, impact.js, evals-tab.js
evals/                    Ask Angel eval harness
  cases.json              questions, required facts, banned advice patterns
  run.mjs                 scores answers on five checks
tests/rules.test.js       unit tests for the rules engine
docs/spec.md              problem, flow, guardrails, metrics, rollout
docs/sizing.md            impact sizing
```

## Run it

```
npm start          # serves site/ at localhost:3000
npm test           # rules engine tests
npm run evals      # scores prototype answers and today's answers
```

No dependencies. Node 18+.

## How the demo works
- Landing page, then `#demo` for the live phone demo.
- Switch between not allotted and allotted, next step on or off (off = today's journey), and English or Hindi.
- Tabs for Ask Angel evals, an impact calculator, and how it was built.

## Deploy
Netlify reads `netlify.toml` and publishes `site/`. No build command.

Concept only. Not an official Angel One product. Not investment advice.
