// tests/utils/api-client.test.ts
import { strict as assert } from "node:assert";
import { test, describe } from "node:test";
import nock from "nock";
import { ApiClient } from "../../src/utils/api-client";

const BASE_URL = "http://localhost";
const apiClient = new ApiClient(BASE_URL);
describe("apiClient", () => {
  test("should fetch data successfully", async () => {
    const endpoint = "/test-endpoint";
    const mockResponse = { data: "test data" };

    nock(BASE_URL).get(endpoint).reply(200, mockResponse);

    const result = await apiClient.request({
      endpoint,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    assert.deepEqual(result, mockResponse);
  });

  test("ApiClient should handle request errors", async () => {
    const endpoint = "/test-endpoint";
    const status = "500";
    const statusText = "Internal Server Error";

    nock(BASE_URL).get(endpoint).reply(500, "Internal Server Error");

    await assert.rejects(
      async () => {
        await apiClient.request({
          endpoint,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
      },
      (err: Error) => {
        assert.strictEqual(
          err.message.includes(status),
          true,
          "Expected error message to include status code 500"
        );
        assert.strictEqual(
          err.message.includes(statusText),
          true,
          "Expected error message to include Interal Server Error"
        );
        return true;
      }
    );
  });

  test("should send POST request with body", async () => {
    const endpoint = "/test-endpoint";
    const requestBody = { key: "value" };
    const mockResponse = { success: true };

    nock(BASE_URL).post(endpoint, requestBody).reply(200, mockResponse);

    const result = await apiClient.request({
      endpoint,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    });
    assert.deepEqual(result, mockResponse);
  });
});
