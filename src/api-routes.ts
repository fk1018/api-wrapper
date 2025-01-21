// src/api-routes.ts
export enum HttpMethod {
  GET = "get",
  POST = "post",
  DELETE = "delete",
}
const _API_ROUTES = {
  ACCOUNTS: {
    LIST_ACCOUNTS: { endpoint: "/v1/accounts", method: HttpMethod.GET },
    CREATE_ACCOUNT: { endpoint: "/v1/accounts", method: HttpMethod.POST },
    DELETE_ACCOUNT: { endpoint: "/v1/accounts/:id", method: HttpMethod.DELETE },
  },
  AXLE_CONFIGURATIONS: {
    LIST_AXLE_CONFIGURATIONS: {
      endpoint: "/v1/axle_configs",
      method: HttpMethod.GET,
    },
  },
  AXLE_CONFIGURATION_TEMPLATES: {
    LIST_AXLE_CONFIGURATION_TEMPLATES: {
      endpoint: "/v1/axle_config_templates",
      method: HttpMethod.GET,
    },
  },
} as const;

type ApiRouteGroup = keyof typeof _API_ROUTES;
type ApiRouteKey<T extends ApiRouteGroup> = keyof (typeof _API_ROUTES)[T];

export const getApiRoute = <T extends ApiRouteGroup, K extends ApiRouteKey<T>>(
  group: T,
  key: K
): (typeof _API_ROUTES)[T][K] => {
  return _API_ROUTES[group][key];
};
