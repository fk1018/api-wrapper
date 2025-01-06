// src/api/axle-configuration-templates/list-axle-configuration-templates.ts
import { getApiRoute } from "../../api-routes";
import { BASE_URL } from "../../config";
import {
  Equal,
  LikeEqual,
  ListApiResponse,
  ApiOptions,
  LtLteGtGte,
  SortDirection,
} from "../../types/api-types";
import { ApiClient } from "../../utils/api-client";

export interface AxleConfigurationTemplate {
  id: string;
  title: string;
  description?: string;
  version: string;
  created_at: string;
  updated_at: string;
}

export interface ListAxleConfigurationTemplatesApiResponse
  extends ListApiResponse<
    {
      name?: LikeEqual;
      external_id?: Equal;
      created_at?: LtLteGtGte;
      updated_at?: LtLteGtGte;
    },
    AxleConfigurationTemplate,
    {
      id: SortDirection;
      created_at: SortDirection;
      updated_date: SortDirection;
    }
  > {}

export interface ListAxleConfigurationTemplatesOptions
  extends ApiOptions<{
    external_id?: Equal;
    name?: LikeEqual;
  }> {}

export function listAxleConfigurationTemplates(
  options: ListAxleConfigurationTemplatesOptions
) {
  const { endpoint, method } = getApiRoute(
    "AXLE_CONFIGURATION_TEMPLATES",
    "LIST_AXLE_CONFIGURATION_TEMPLATES"
  );
  const axleConfigurationTemplateApi = new ApiClient(BASE_URL);
  return axleConfigurationTemplateApi.request<ListAxleConfigurationTemplatesApiResponse>(
    {
      endpoint,
      method,
      headers: options.headers,
      params: options.queryParams,
    }
  );
}
