// src/utils/api-client.ts
import { createUrl } from "./create-urls";

export class ApiClient {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request<T>({
    endpoint,
    method,
    headers,
    params,
    body,
  }: {
    endpoint: string;
    method: string;
    headers: HeadersInit;
    params?: Record<string, any>;
    body?: unknown;
  }): Promise<T> {
    const url = createUrl({
      baseUrl: this.baseUrl,
      endpoint,
      queryParams: params,
    });
    const requestInit: RequestInit = { method, headers };
    if (body) requestInit.body = JSON.stringify(body);
    return fetch(url, requestInit).then((response) => {
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      }
      console.log(`Error making request:\n\t${JSON.stringify(response)}`);
      throw new Error(
        JSON.stringify({
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        })
      );
    });
  }
}
