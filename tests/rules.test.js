// Run with: node --test tests/
const test = require('node:test');
const assert = require('node:assert');
const Rules = require('../site/js/rules.js');

test('refund options: ETF first, then IPO reminder, then not now', () => {
  assert.deepStrictEqual(Rules.refundOptions({ refund: 13428, upcomingIPO: true, optedOut: false }), ['etf', 'ipo', 'not']);
});

test('refund options: no ETF card if the refund is below one ETF unit', () => {
  assert.deepStrictEqual(Rules.refundOptions({ refund: 5, upcomingIPO: false, optedOut: false }), ['not']);
});

test('refund options: nothing shown after "not now"', () => {
  assert.deepStrictEqual(Rules.refundOptions({ refund: 13428, upcomingIPO: true, optedOut: true }), []);
});

test('sale plan maths matches the Jio listing (12 shares, ₹1,119 → ₹1,417)', () => {
  const all = Rules.salePlan('all', { shares: 12, issuePrice: 1119, sellPrice: 1417 });
  assert.strictEqual(all.received, 17004);
  assert.strictEqual(all.profit, 3576);
  assert.strictEqual(all.tax, 715);
  const half = Rules.salePlan('half', { shares: 12, issuePrice: 1119, sellPrice: 1417 });
  assert.deepStrictEqual([half.sold, half.held, half.profit], [6, 6, 1788]);
});

test('guardrail: margin, F&O and single stocks are never suggested', () => {
  for (const id of ['mtf', 'fno', 'single-stock']) assert.strictEqual(Rules.isAllowed(id), false);
  assert.strictEqual(Rules.isAllowed('etf'), true);
});

test('checklist drops items once done', () => {
  assert.deepStrictEqual(Rules.listingChecklist({ ddpi: true, readListingGuide: false }), ['listing-guide', 'plan']);
});
