export const cachedResponses = {
  "What operational metrics most impact contribution margin in food delivery?":
    "q1.json",
  "What drives growth in food delivery — help me understand the interplay between AOV expansion, Frequency and Customer additions?":
    "q2.json",
  "Why is throughput per dark store a better success metric than just store count?":
    "q3.json",
  "How do the economics of Zepto, Blinkit and Zomato compare for the Quick Commerce business?":
    "q4.json",
  "How have Zepto, Instamart, Blinkit structured their dark store operations — ownership, lease, or 3P ops?":
    "q5.json",
  "What’s one early decision that Zomato/Swiggy/Zepto made that you think fundamentally altered their trajectory?":
    "q6.json",
  "How has Zomato’s Hyperpure business scaled in terms of revenue, take rate, and % of restaurant network penetration?":
    "q7.json",
  "What are the key verticals contributing to Zomato’s consolidated revenues and how has this mix evolved over the last 12 quarters?":
    "q8.json",
  "How have Swiggy’s valuation multiples (EV/GTV, EV/Sales) trended across major rounds over last 10 years?":
    "q9.json",
  "How does Zepto’s SKU mix and sourcing strategy differ from Swiggy Instamart in fresh and impulse categories?":
    "q10.json",
  "What are the key insights I should share and key questions I should ask when meeting the founder of an early-stage food delivery company?":
    "q11.json",
  "Where do you think customer behavior will structurally shift over the next 5 years — in food, groceries, or dining out?":
    "q12.json",
};

export async function getCachedResponse(question) {
  const fileName = cachedResponses[question];
  if (!fileName) return null;

  // Assuming cachedJsons is in the public folder
  const response = await fetch(
    `/src/components/home/global/ChatInput/utils/cachedJsons/${fileName}`
  );

  if (!response.ok) return null;

  return await response.json();
}
