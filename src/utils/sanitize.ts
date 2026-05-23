/**
 * Converts characters like <, >, and & into their corresponding HTML entities.
 * @param {string} str - The raw input string from the user.
 * @returns {string} The sanitized string safe for HTML interpolation.
 */
export function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates URLs to prevent Javascript URIs and malicious data protocols.
 * * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL is safe to use in src or href attributes.
 */
export function isSafeUrl(url: string): boolean {
  const normalizedUrl = url.trim().toLowerCase();
  return (
    normalizedUrl.startsWith("http://") ||
    normalizedUrl.startsWith("https://") ||
    normalizedUrl.startsWith("/")
  );
}
