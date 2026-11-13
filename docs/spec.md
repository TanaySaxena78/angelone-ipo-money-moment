# Spec: the IPO money moment

## Problem
Many new users place their first order as an IPO bid. When the result lands, money comes back (a refund, or a listing gain), and the app offers no next step. The IPO wins an account, not an investor.

## Who
- Profit-taker: got shares, sells on listing day, moves everything to the bank.
- Non-allottee: gets a refund, unsure when, often prefers Hindi.
- Low-fund user: the refund is all they have to invest.

## What changes
1. **Result push** says what happened and when the money arrives (refund by 4 PM on T+2).
2. **Result screen** shows a money timeline and up to three next steps, picked by rules (`site/js/rules.js`):
   - Start small: ₹500/month Nifty 50 ETF SIP (shown only if the refund covers one unit).
   - Keep it ready: reminder for the next big IPO.
   - Not now: no nudges for 30 days.
3. **Allotted users** get a listing-day checklist: Quick Sell (DDPI), how the 9:00–10:00 session works, and a sell / half / hold plan with tax shown.
4. **Ask Angel** sits on these screens with correct, sourced answers, in Hindi or English. It explains; it never picks a stock.

## Guardrails
- Rules pick the options. AI only explains them.
- Margin, F&O and single stocks are never suggested in this moment (`Rules.isAllowed`).
- Every answer must pass the eval checks in `evals/` before launch.

## Metrics
| Metric | Formula |
|---|---|
| North star: 30-day second-investment rate | applicants with a non-IPO investment within 30 days ÷ all applicants |
| Result-screen open rate | opened the result screen ÷ got the push |
| SIP setup completion | SIPs set up ÷ chose SIP |
| Guardrail: risky products | turned on F&O or margin within 30 days ÷ group |
| Guardrail: opt-outs | push opt-outs and complaints per 10,000 users |

## Rollout
10% of applicants at the next big IPO, then 50%, then 100%, with a holdout at each step.
