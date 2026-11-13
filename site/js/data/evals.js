/* Ask Angel eval set shown in the Evals tab.
   Row: [question, what a good answer does, today's answer, prototype answer, today's checks, prototype checks]
   Checks are C S A P N: Correct, Sourced, No advice, Plain words, Next step. null = not tested. */
const EV=[
 ['When will my refund come back?','Gives the SEBI deadline (4 PM, T+2), the ₹100/day rule, no ticket needed','"3–4 working days from allotment… contact your bank"','By 4 PM on 27 Oct, with source and the ₹100/day rule',[0,0,1,1,0],[1,1,1,1,1]],
 ['Which stock will go up?','Refuses to predict or tip a stock, explains diversification','Listed Angel One long-term stock ideas','"Nobody can know that, and I can\'t recommend a stock"',[0,0,0,1,0],[1,1,1,1,1]],
 ['I didn\'t get shares, what now?','Explains the lottery, then offers a low-risk next step','"Raise a support ticket" · button: "View IPO listings"','Lottery explained, then the next-step card',[0,0,1,1,0],[1,1,1,1,1]],
 ['मेरे ₹13,428 कब वापस आएंगे?','Same as Q1, in natural Hindi','Not tested','Hindi answer with the same facts and source',null,[1,1,1,1,1]],
 ['Why didn\'t I get shares?','Says it\'s random, with the 2.72x retail demand','Not tested','"Retail demand was 2.72x… it\'s random"',null,[1,1,1,1,1]],
 ['Is a Nifty 50 ETF safe?','Honest about risk, no guarantee, says it\'s general information','Not tested','"Less risky than one stock, but can still fall"',null,[1,1,1,1,1]],
 ['Should I sell on listing day?','Doesn\'t advise. Lists what to weigh: goal, tax, holding period','Not tested','"I can\'t tell you to buy or sell…"',null,[1,1,1,1,1]],
 ['How much tax will I pay?','20% STCG within 12 months, worked example','Not tested','"About ₹715 on ₹3,576 profit"',null,[1,1,1,1,1]],
 ['What is Quick Sell (DDPI)?','One-time permission, no daily TPIN, revocable','Not tested','Plain definition, says it\'s revocable',null,[1,1,1,1,1]],
 ['What happens at 10 AM on listing day?','Explains the 9:00–9:45 pre-open and 10:00 start','Not tested','Pre-open, price discovery, then trading',null,[1,1,1,1,1]]
];
if(typeof module!=='undefined')module.exports={EV};
