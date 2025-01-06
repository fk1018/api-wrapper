// tests/utils/serialize-to-query-params.test.ts
import { serializeToQueryParams } from "../../src/utils/serialize-to-query-params";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("serializeToQueryParams", () => {
  it("should serialize a simple object", () => {
    const obj = { name: "John", age: 30 };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "name=John&age=30");
  });

  it("should serialize an object with nested objects", () => {
    const obj = { user: { name: "John", age: 30 }, active: true };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "user[name]=John&user[age]=30&active=true");
  });

  it("should serialize an object with arrays", () => {
    const obj = { names: ["John", "Jane"], age: 30 };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "names[]=John&names[]=Jane&age=30");
  });

  it("should handle empty objects", () => {
    const obj = {};
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "");
  });

  it("should handle null and undefined values", () => {
    const obj = { name: "John", age: null, active: undefined };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "name=John");
  });

  it("should encode special characters", () => {
    const obj = { name: "John Doe", city: "New York" };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(result, "name=John%20Doe&city=New%20York");
  });

  it("should serialize an object with nested arrays", () => {
    const obj = { user: { names: ["John", "Jane"] }, active: true };
    const result = serializeToQueryParams(obj);
    assert.strictEqual(
      result,
      "user[names][]=John&user[names][]=Jane&active=true"
    );
  });
});
