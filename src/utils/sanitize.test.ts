import { describe, it, expect } from "vitest";
import { escapeHTML, isSafeUrl } from "./sanitize";

describe("escapeHTML", () => {
  it("should escape all basic HTML special characters", () => {
    const input = `<script src="testing.js">alert('XSS & more');</script>`;
    const expected = "&lt;script src=&quot;testing.js&quot;&gt;alert(&#039;XSS &amp; more&#039;);&lt;/script&gt;";
    expect(escapeHTML(input)).toBe(expected);
  });

  it("should show normal text", () => {
    const normalText = "Hello World! This is a 100% normal string.";
    expect(escapeHTML(normalText)).toBe(normalText);
  });

  it("should escape double and single quotes correctly", () => {
    expect(escapeHTML(`"Hello" 'world'`)).toBe("&quot;Hello&quot; &#039;world&#039;");
  });
});

describe("isSafeUrl", () => {
  it("should allow safe HTTP and HTTPS protocols", () => {
    expect(isSafeUrl("http://example.com")).toBe(true);
    expect(isSafeUrl("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800")).toBe(true);
  });

  it("should allow safe relative/absolute root paths", () => {
    expect(isSafeUrl("/")).toBe(true);
    expect(isSafeUrl("/assets/logo.png")).toBe(true);
  });

  it("should block dangerous javascript: URIs", () => {
    expect(isSafeUrl("javascript:alert(1)")).toBe(false);
    expect(isSafeUrl("  javascript:alert('XSS')  ")).toBe(false);
    expect(isSafeUrl("JAVASCRIPT:alert(1)")).toBe(false);
  });

  it("should block dangerous data: URIs", () => {
    expect(isSafeUrl("data:text/html,<script>alert(1)</script>")).toBe(false);
    expect(isSafeUrl("data:image/svg+xml;base64,...")).toBe(false);
  });

  it("should block other unsafe protocols", () => {
    expect(isSafeUrl("file:///etc/passwd")).toBe(false);
    expect(isSafeUrl("vbscript:msgbox('hello')")).toBe(false);
    expect(isSafeUrl("ftp://safeplace.com")).toBe(false);
  });

  it("should handle empty or whitespace URLs", () => {
    expect(isSafeUrl("")).toBe(false);
    expect(isSafeUrl("   ")).toBe(false);
  });
});
