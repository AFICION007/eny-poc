/**
 * Extracts the domain name from a URL
 * @param {string} url - The URL to parse
 * @returns {string} The domain name
 */
export const getDomainFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    const domain = hostname.replace(/^www\./, "");
    const mainDomain = domain.split(".")[0];

    return mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1);
  } catch (error) {
    return "";
  }
};

export const getNormalizedString = (str) => {
  // Replace all underscores with spaces
  const withSpaces = str.replace(/_/g, " ");
  // Replace multiple spaces with a single space
  const normalized = withSpaces.replace(/\s+/g, " ");
  // Trim any leading/trailing spaces
  return normalized.trim();
};
