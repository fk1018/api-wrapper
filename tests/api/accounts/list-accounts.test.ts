// tests/api/accounts/list-accounts.test.ts
import {
  listAccounts,
  ListAccountsOptions,
} from "../../../src/api/accounts/list-accounts";
import { BASE_URL } from "../../../src/config";
import nock from "nock";
import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { getApiRoute } from "../../../src/api-routes";

describe("listAccounts", () => {
  type mockQueryParamsType = ListAccountsOptions["queryParams"];

  const mockQueryParams: mockQueryParamsType = {
    start_cursor: "start",
    per_page: 50,
    filter: {
      account_name: { like: "test" },
    },
    sort: {
      id: "desc",
    },
  };

  const mockListAccountOptions: ListAccountsOptions = {
    apiKey: "testApiKey",
    accountToken: "testAccountToken",
    queryParams: mockQueryParams,
    headers: {
      Accept: "application/json",
      Authorization: `Token 123`,
      "X-Api-Version": "2024-06-30",
    },
  };

  const { endpoint } = getApiRoute("ACCOUNTS", "LIST_ACCOUNTS");

  beforeEach(() => {
    nock.cleanAll(); // Clear any active mocks before each test
  });

  it("should send a GET request to the correct endpoint with expected query params", async () => {
    nock(BASE_URL)
      .get(endpoint)
      .query(mockQueryParams)
      .reply(200, { records: [] });

    const result = await listAccounts(mockListAccountOptions);

    assert.strictEqual(
      Array.isArray(result.records),
      true,
      "Expected 'records' to be an array"
    );
  });

  it("should pass optional headers if provided", async () => {
    const customHeaders = {
      Accept: "application/json",
      Authorization: `Token 456`,
    };

    nock(BASE_URL)
      .get(endpoint)
      .query(mockQueryParams)
      .matchHeader("Authorization", "Token 456")
      .reply(200, { records: [] });

    const result = await listAccounts({
      ...mockListAccountOptions,
      headers: customHeaders,
    });
    assert.deepStrictEqual(result.records, []);
  });
});
