// src/api/axle-configurations/list-axle-configurations.ts
import { getApiRoute } from "../../api-routes";
import { BASE_URL } from "../../config";
import {
  LikeEqual,
  ResultsPerPage,
  LtLteGtGte,
  SortDirection,
  SupportedApiVersion,
  ApiHeaders,
  Equal,
  ListApiResponse,
  ApiOptions,
} from "../../types/api-types";
import { ApiClient } from "../../utils/api-client";
type EqualTrueFalse = { eq: "true" | "false" };
type EqualInclude = Equal | { include: string };

export interface AxleConfiguration {
  id?: number;
  name?: string;
  description?: string;
  axle_config_template_id: number;
  vehicle_id?: number;
  active?: boolean;
  axles_count?: number;
  is_trailer?: boolean;
  tire_positions_count?: number;
  tire_count?: number;
  vehicle?: {
    id?: number;
    name?: string;
    color?: string;
    license_plate?: string;
    vin?: string;
    year?: string;
    make?: string;
    model?: string;
    trim?: string;
    registration_expiration_month?:
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12;
    registration_state?: string;
    default_image_url_small?: string;
  };
}

export interface ListAxleConfigurationsApiResponse
  extends ListApiResponse<
    {
      active?: EqualTrueFalse;
      is_trailer?: EqualTrueFalse;
      vehicle_id?: EqualInclude;
      axle_config_template_id?: EqualInclude;
      name?: EqualInclude;
      created_at?: LtLteGtGte;
      update_at?: LtLteGtGte;
    },
    AxleConfiguration,
    {
      id: SortDirection;
      created_at: SortDirection;
      updated_date: SortDirection;
    }
  > {}

export interface ListAxleConfigurationsOptions
  extends ApiOptions<{
    active?: EqualTrueFalse;
    is_trailer?: EqualTrueFalse;
    vehicle_id?: EqualInclude;
    axle_configuration_template_id?: EqualInclude;
    name?: LikeEqual;
  }> {}

export const listAxleConfigurations = (
  options: ListAxleConfigurationsOptions
) => {
  const { endpoint, method } = getApiRoute(
    "AXLE_CONFIGURATIONS",
    "LIST_AXLE_CONFIGURATIONS"
  );
  const accountApi = new ApiClient(BASE_URL);
  return accountApi.request<ListAxleConfigurationsApiResponse>({
    endpoint,
    method,
    headers: options.headers,
    params: options.queryParams,
  });
};
