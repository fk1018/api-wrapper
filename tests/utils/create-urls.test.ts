// tests/utils/create-urls.test.ts
import { createUrl } from "../../src/utils/create-urls";
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
describe("createUrl", () => {
  it("should return baseUrl when no endpoint or queryParams are provided", () => {
    const url = createUrl({ baseUrl: "https://example.com" });
    assert.equal(url, "https://example.com");
  });

  it("should append endpoint to baseUrl", () => {
    const url = createUrl({ baseUrl: "https://example.com", endpoint: "/api" });
    assert.equal(url, "https://example.com/api");
  });

  it("should replace endpoint keys with provided values", () => {
    const url = createUrl({
      baseUrl: "https://example.com",
      endpoint: "/api/:id",
      endpointKeysToReplace: { id: 123 },
    });
    assert.equal(url, "https://example.com/api/123");
  });

  it("should append queryParams to the url", () => {
    const url = createUrl({
      baseUrl: "https://example.com",
      queryParams: { search: "test", page: 1 },
    });
    assert.equal(url, "https://example.com?search=test&page=1");
  });

  it("should handle both endpoint and queryParams", () => {
    const url = createUrl({
      baseUrl: "https://example.com",
      endpoint: "/api",
      queryParams: { search: "test" },
    });
    assert.equal(url, "https://example.com/api?search=test");
  });

  it("should handle endpoint with keys and queryParams", () => {
    const url = createUrl({
      baseUrl: "https://example.com",
      endpoint: "/api/:id",
      endpointKeysToReplace: { id: 123 },
      queryParams: { search: "test" },
    });
    assert.equal(url, "https://example.com/api/123?search=test");
  });
});
