// tests/api/accounts/create-account.test.ts
import { BASE_URL } from "../../../src/config";
import nock from "nock";
import { describe, it, beforeEach, mock } from "node:test";
import assert from "node:assert";
import { getApiRoute } from "../../../src/api-routes";
import {
  createAccount,
  CreateAccountBody,
  CreateAccountOptions,
} from "../../../src/api/accounts/create-account";
import { OK } from "../../../src/types/api-types";

describe("CreateAccount", () => {
  const mockBody: CreateAccountBody = {
    user_full_name: "John Doe",
    user_email: "john.doe@example.com",
    user_password: "password123",
    account_name: "John's Account",
  };
  const mockListAxleConfigurationOptions: CreateAccountOptions = {
    apiKey: "testApiKey",
    accountToken: "testAccountToken",
    headers: {
      Accept: "application/json",
      Authorization: `Token 123`,
      "X-Api-Version": "2024-06-30",
      "Account-Token": "abc123",
      "Organization-Token": "def456",
      "Partner-Token": "zed789",
      "Content-Type": "application/json",
    },
    body: mockBody,
  };

  const { endpoint } = getApiRoute("ACCOUNTS", "CREATE_ACCOUNT");

  beforeEach(() => {
    nock.cleanAll(); // Clear any active mocks before each test
  });

  it("should send a POST request to the correct endpoint with expected query params", async () => {
    const expectedResponse: OK = "OK";
    const body = JSON.stringify(mockBody);
    nock(BASE_URL).post(endpoint, body).reply(201, "OK");

    const result = await createAccount(mockListAxleConfigurationOptions);

    assert.strictEqual(result, expectedResponse, 'Expected result to be "OK"');
  });
});
