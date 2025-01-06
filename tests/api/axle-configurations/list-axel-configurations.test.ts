// tests/api/axle-configurations/list-axel-configurations.test.ts
import { BASE_URL } from "../../../src/config";
import nock from "nock";
import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";
import { getApiRoute } from "../../../src/api-routes";
import {
  listAxleConfigurations,
  ListAxleConfigurationsOptions,
} from "../../../src/api/axle-configurations/list-axle-configurations";

describe("listAxleConfigurations", () => {
  type mockQueryParamsType = ListAxleConfigurationsOptions["queryParams"];

  const mockQueryParams: mockQueryParamsType = {
    start_cursor: "start",
    per_page: 50,
    filter: {
      active: { eq: "false" },
    },
    sort: {
      id: "desc",
    },
  };

  const mockListAxleConfigurationOptions: ListAxleConfigurationsOptions = {
    apiKey: "testApiKey",
    accountToken: "testAccountToken",
    queryParams: mockQueryParams,
    headers: {
      Accept: "application/json",
      Authorization: `Token 123`,
      "X-Api-Version": "2024-06-30",
      "Account-Token": "abc123",
    },
  };

  const { endpoint } = getApiRoute(
    "AXLE_CONFIGURATIONS",
    "LIST_AXLE_CONFIGURATIONS"
  );

  beforeEach(() => {
    nock.cleanAll(); // Clear any active mocks before each test
  });

  it("should send a GET request to the correct endpoint with expected query params", async () => {
    nock(BASE_URL)
      .get(endpoint)
      .query(mockQueryParams)
      .reply(200, { records: [] });

    const result = await listAxleConfigurations(
      mockListAxleConfigurationOptions
    );

    assert.strictEqual(
      Array.isArray(result.records),
      true,
      "Expected 'records' to be an array"
    );
  });
});
