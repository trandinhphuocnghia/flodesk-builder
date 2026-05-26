import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resolveToHex } from "./style";

vi.mock("@flodesk/grain", () => ({
  getColor: (c: string) => c,
}));

//Test with 6 digits hex
describe("resolveToHex", () => {
  describe("6-digit hex", () => {
    it("should have lowercase hex", () => {
      expect(resolveToHex("#3474E0")).toBe("#3474e0");
    });

    it("should have lowercase hex", () => {
      expect(resolveToHex("#3474E0")).toBe("#3474e0");
    });

    it("preserves valid lowercase hex", () => {
      expect(resolveToHex("#ffffff")).toBe("#ffffff");
    });
  });
});

//Test with 3 digits hex
describe("3-digit hex", () => {
  it("expands to 6-digit hex", () => {
    expect(resolveToHex("#fff")).toBe("#ffffff");
    expect(resolveToHex("#F00")).toBe("#ff0000");
  });
});

//Test with computed color
describe("computed resolver", () => {
  const mockElement = {
    style: {
      color: "",
      display: "",
    },
  };

  /* before each test cases:
  fake document to create element to computed the color.
  after each: unstubAllGlobals
  */
  beforeEach(() => {
    vi.stubGlobal("document", {
      createElement: (tag: string) => {
        if (tag === "div") return mockElement;
        return {};
      },
      body: {
        appendChild: () => {},
        removeChild: () => {},
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should return 6digits from rgb()", () => {
    vi.stubGlobal("window", {
      getComputedStyle: () => ({ color: "rgb(52, 116, 224)" }),
    });
    expect(resolveToHex("rgb(52, 116, 224)")).toBe("#3474e0");
  });

  it("should return 6digits from rgba()", () => {
    vi.stubGlobal("window", {
      getComputedStyle: () => ({ color: "rgba(52, 116, 224, 0.5)" }),
    });
    expect(resolveToHex("rgba(52, 116, 224, 0.5)")).toBe("#3474e0");
  });
});

describe("fallback", () => {
  it("returns #ffffff for empty string", () => {
    expect(resolveToHex("")).toBe("#ffffff");
  });

  it("returns #ffffff for invalid color", () => {
    vi.stubGlobal(
      "getComputedStyle",
      vi.fn().mockReturnValue({
        color: "invalid",
      }),
    );

    expect(resolveToHex("notacolor")).toBe("#ffffff");
  });

  it("returns #ffffff when window undefined", () => {
    vi.stubGlobal("window", undefined);
    expect(resolveToHex("hsl(210, 76%, 54%)")).toBe("#ffffff");
  });
});
