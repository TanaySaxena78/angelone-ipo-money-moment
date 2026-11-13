/* Rules engine: decides which next steps a user sees after an IPO result.
   Fixed, auditable rules pick the options. AI (Ask Angel) only explains them.
   Nothing here ranks individual stocks, so no card can read as a stock tip. */
const Rules = (() => {
  const MIN_ETF = 11;          // lowest ETF unit price on the platform (₹)
  const DEFAULT_SIP = 500;     // suggested monthly SIP (₹)
  const STCG = 0.20;           // short-term capital gains tax if sold within 12 months

  // Not allotted: what to do with the refund
  function refundOptions({ refund, upcomingIPO, optedOut }) {
    if (optedOut) return [];
    const out = [];
    if (refund >= MIN_ETF) out.push('etf');   // start small in a broad index ETF
    if (upcomingIPO) out.push('ipo');         // keep it ready, reminder only
    out.push('not');                          // always allow "not now"
    return out;
  }

  // Allotted: listing-day checklist items still open
  function listingChecklist({ ddpi, readListingGuide }) {
    const items = [];
    if (!ddpi) items.push('ddpi');
    if (!readListingGuide) items.push('listing-guide');
    items.push('plan');
    return items;
  }

  // Allotted: what a sale plan means in money
  function salePlan(plan, { shares, issuePrice, sellPrice }) {
    const sold = plan === 'all' ? shares : plan === 'half' ? Math.floor(shares / 2) : 0;
    const received = sold * sellPrice;
    const profit = sold * (sellPrice - issuePrice);
    return { sold, held: shares - sold, received, profit, tax: Math.round(profit * STCG) };
  }

  // Guardrail: products we never suggest in this moment
  const BLOCKED = ['mtf', 'margin', 'fno', 'options', 'futures', 'single-stock'];
  const isAllowed = id => !BLOCKED.includes(id);

  return { refundOptions, listingChecklist, salePlan, isAllowed, MIN_ETF, DEFAULT_SIP, STCG };
})();
if (typeof module !== 'undefined') module.exports = Rules;
