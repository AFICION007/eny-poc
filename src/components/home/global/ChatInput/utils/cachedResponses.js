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
