// src/api-routes.ts
const GET = "get";
const POST = "post";
const DELETE = "delete";
const _API_ROUTES = {
  ACCOUNTS: {
    LIST_ACCOUNTS: { endpoint: "/v1/accounts", method: GET },
    CREATE_ACCOUNT: { endpoint: "/v1/accounts", method: POST },
    DELETE_ACCOUNT: { endpoint: "/v1/accounts/:id", method: DELETE },
  },
  AXLE_CONFIGURATIONS: {
    LIST_AXLE_CONFIGURATIONS: { endpoint: "/v1/axle_configs", method: GET },
  },
  AXLE_CONFIGURATION_TEMPLATES: {
    LIST_AXLE_CONFIGURATION_TEMPLATES: {
      endpoint: "/v1/axle_config_templates",
      method: GET,
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
