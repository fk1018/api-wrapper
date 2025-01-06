// src/utils/create-urls.ts
import { serializeToQueryParams } from "./serialize-to-query-params";
interface createUrl {
  baseUrl: string;
  endpoint?: string;
  endpointKeysToReplace?: Record<string, any>;
  queryParams?: Record<string, any>;
}
export function createUrl(createUrlParams: createUrl): string {
  const { baseUrl, endpoint, endpointKeysToReplace, queryParams } =
    createUrlParams;
  let url = baseUrl;
  if (endpoint) {
    if (endpointKeysToReplace) {
      for (const key in endpointKeysToReplace) {
        url += endpoint.replace(`:${key}`, endpointKeysToReplace[key]);
      }
    } else {
      url += endpoint;
    }
  }
  if (queryParams) {
    const params = serializeToQueryParams(queryParams);
    url += `?${params}`;
  }
  return url;
}
