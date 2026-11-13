/* Ask Angel answers.
   QA: the answers the assistant should give (English, Hindi), with sources.
   TODAY_QA: what today's assistant actually said in a fresh-account test (11 Nov 2026).
   SUGG: suggested questions per mode and scenario. */
const QA={
 refund:{q:['When will my ₹13,428 come back?','मेरे ₹13,428 कब वापस आएंगे?'],
  a:['Under SEBI\'s T+3 rule, money for bids that weren\'t allotted is unblocked by 4 PM on 27 Oct, one working day after allotment. If it\'s late, your bank must pay you ₹100 a day. You don\'t need to raise a ticket.','SEBI के T+3 नियम के तहत, जिन बोलियों पर शेयर नहीं मिले उनका पैसा 27 अक्टूबर शाम 4 बजे तक अनब्लॉक हो जाता है, यानी अलॉटमेंट के एक कार्यदिवस बाद। देर होने पर बैंक को आपको ₹100 प्रतिदिन देना होगा। टिकट बनाने की ज़रूरत नहीं।'],
  src:['Source: SEBI circular on T+3 listing, Aug 2023','स्रोत: T+3 लिस्टिंग पर SEBI सर्कुलर, अगस्त 2023']},
 why:{q:['Why didn\'t I get shares?','मुझे शेयर क्यों नहीं मिले?'],
  a:['Retail demand was 2.72 times the shares on offer, so allotment was a lottery. Roughly 7 in 10 applicants got a lot. It\'s random, not because of anything you did.','रिटेल मांग उपलब्ध शेयरों से 2.72 गुना थी, इसलिए अलॉटमेंट लॉटरी से हुआ। लगभग 10 में से 7 आवेदकों को एक लॉट मिला। यह संयोग है, आपकी किसी गलती से नहीं।']},
 etf:{q:['Is a Nifty 50 ETF safe?','क्या Nifty 50 ETF सुरक्षित है?'],
  a:['It\'s spread across India\'s top 50 companies, so it\'s less risky than one stock, but it can still fall in the short term. It suits money you won\'t need for 3+ years. This is general information, not advice.','यह भारत की टॉप 50 कंपनियों में फैला है, इसलिए एक शेयर से कम जोखिम है, लेकिन कम समय में यह घट भी सकता है। यह उस पैसे के लिए ठीक है जिसकी 3+ साल ज़रूरत नहीं। यह सामान्य जानकारी है, सलाह नहीं।']},
 pick:{q:['Which stock will go up?','कौन सा शेयर ऊपर जाएगा?'],
  a:['Nobody can know that, and I can\'t recommend a stock. If you\'re starting out, people often begin with something spread across many companies, like an index fund, and add slowly.','यह कोई नहीं जान सकता, और मैं किसी शेयर की सलाह नहीं दे सकता। शुरुआत करने वाले लोग अक्सर इंडेक्स फंड जैसी कई कंपनियों में फैली चीज़ से शुरू करते हैं और धीरे-धीरे बढ़ाते हैं।']},
 next:{q:['When is the next big IPO?','अगला बड़ा IPO कब है?'],
  a:['Coming up: Flipkart, PayU, CarDekho and more. Dates aren\'t announced yet. Want a reminder when one opens?','आने वाले: Flipkart, PayU, CarDekho और भी। तारीखें अभी घोषित नहीं हुईं। एक खुलते ही रिमाइंडर चाहिए?'],remind:true},
 sell:{q:['Should I sell on listing day?','क्या लिस्टिंग के दिन बेच दूं?'],
  a:['I can\'t tell you to buy or sell. Nobody knows the listing price in advance. People usually weigh their goal, short-term tax (20% if sold within 12 months), and whether they\'d hold this company for years. Selling half and keeping half is also an option.','मैं खरीदने या बेचने की सलाह नहीं दे सकता। लिस्टिंग प्राइस पहले से कोई नहीं जानता। लोग आमतौर पर अपना लक्ष्य, शॉर्ट-टर्म टैक्स (12 महीने में बेचने पर 20%), और क्या वे इस कंपनी को सालों रखेंगे, यह सोचते हैं। आधा बेचकर आधा रखना भी एक विकल्प है।']},
 tax:{q:['How much tax will I pay?','मुझे कितना टैक्स देना होगा?'],
  a:['If you sell within 12 months, profit is taxed at 20% as short-term capital gains. On a ₹3,576 profit that\'s about ₹715, plus small charges.','12 महीने के अंदर बेचने पर मुनाफ़े पर 20% शॉर्ट-टर्म कैपिटल गेन टैक्स। ₹3,576 के मुनाफ़े पर लगभग ₹715, और थोड़े चार्ज।']},
 ddpi:{q:['What is Quick Sell (DDPI)?','Quick Sell (DDPI) क्या है?'],
  a:['A one-time permission that lets your broker debit shares when you sell, so you don\'t enter TPIN + OTP every day. You can revoke it anytime.','एक बार की अनुमति, जिससे बेचते समय ब्रोकर शेयर डेबिट कर सके, ताकि हर दिन TPIN + OTP न डालना पड़े। इसे कभी भी वापस ले सकते हैं।']},
 ten:{q:['What happens at 10 AM?','10 बजे क्या होता है?'],
  a:['From 9:00 to 9:45 AM, buy and sell orders are collected in a special pre-open session. The exchange then sets the listing price, and normal trading starts at 10:00 AM.','सुबह 9:00 से 9:45 तक एक खास प्री-ओपन सेशन में ऑर्डर लिए जाते हैं। फिर एक्सचेंज लिस्टिंग प्राइस तय करता है, और 10:00 बजे से सामान्य ट्रेडिंग शुरू होती है।']}
};
const TODAY_QA={
 refund:{q:['When will my ₹13,428 come back?','मेरे ₹13,428 कब वापस आएंगे?'],a:['Funds for non-allotted shares are unblocked within 3–4 working days from the allotment date, depending on your bank. Angel One does not control the unblocking. If delayed, please contact your bank directly.','Funds for non-allotted shares are unblocked within 3–4 working days from the allotment date, depending on your bank. Angel One does not control the unblocking. If delayed, please contact your bank directly.'],bad:true},
 why:{q:['I didn\'t get shares, what should I do?','मुझे शेयर नहीं मिले, अब क्या करूं?'],a:['What you can do next: if you applied through Angel One and shares don\'t appear, raise a support ticket. If you applied through another platform, contact their support team.','What you can do next: if you applied through Angel One and shares don\'t appear, raise a support ticket. If you applied through another platform, contact their support team.'],bad:true,ipo:true},
 pick:{q:['Which stock will go up?','कौन सा शेयर ऊपर जाएगा?'],a:['Here are some long-term stock ideas from Angel One research. Investments are subject to market risk.','Here are some long-term stock ideas from Angel One research. Investments are subject to market risk.'],bad:true}
};
const SUGG={on:{na:['refund','why','etf','pick','next'],al:['sell','tax','ddpi','ten','pick']},off:{na:['refund','why','pick'],al:['refund','why','pick']}};
if(typeof module!=='undefined')module.exports={QA,TODAY_QA,SUGG};
