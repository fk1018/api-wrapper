// src/api/accounts/listAccounts.ts
import { getApiRoute } from "../../api-routes";
import { BASE_URL } from "../../config";
import {
  LikeEqual,
  SortDirection,
  ApiHeaders,
  LtLteGtGte,
  Equal,
  ApiOptions,
  ListApiResponse,
} from "../../types/api-types";
import { ApiClient } from "../../utils/api-client";

export interface Account {
  id: number;
  created_at: string; // Date-time
  updated_at: string; // Date-time
  account_membership_id: number;
  name: string;
  user_type: "admin" | "owner" | "regular" | "guest";
  token: string;
  time_24_format: boolean;
  currency_symbol: string;
  city: string;
  region: string;
  postal_code: string;
  street_address: string;
  street_address_line_2: string;
  country: string;
  read_vehicles: boolean;
  manage_vehicles: boolean;
  create_vehicles: boolean;
  read_fuel_entries: boolean;
  manage_fuel_entries: boolean;
  read_service_entries: boolean;
  manage_service_entries: boolean;
  read_issues: boolean;
  manage_issues: boolean;
  read_work_orders: boolean;
  manage_work_orders: boolean;
  read_service_reminders: boolean;
  manage_service_reminders: boolean;
  read_vehicle_renewal_reminders: boolean;
  manage_vehicle_renewal_reminders: boolean;
  read_comments: boolean;
  manage_comments: boolean;
  read_meter_entries: boolean;
  manage_meter_entries: boolean;
  read_groups: boolean;
  read_contacts: boolean;
  fleetio_manage: boolean;
  inspections: boolean;
  update_parts: boolean;
  update_inventory: boolean;
  allowed_part_location_ids: number[];
  new_inventory_permissions: boolean;
  plan: string;
  state: "trialing" | "assessing" | "active" | "past_due" | "soft_failure";
  default_meter_unit: string;
  default_fuel_volume_unit: string;
  default_system_of_measurement: "imperial" | "metric";
  tax_settings?: {
    tax_free_labor: boolean;
    tax_2: boolean;
    default_tax_1: string;
    default_tax_2: string;
    default_tax_type: "fixed" | "percentage";
  };
  next_work_order_number: number;
  offline_inspections: boolean;
  inspections_new_item_type_beta?: boolean; // Deprecated
  paying_customer: boolean;
  is_demo: boolean;
  require_group: boolean;
  require_a_meter_entry_on_service_entry_or_completed_work_order: boolean;
  has_ro_notification_subscription: boolean;
  require_an_inventory_location_on_wo_part_line_items: boolean;
  use_forecasted_dates_for_service_reminders: boolean;
  require_a_rpc_on_service_entry_or_completed_work_order: boolean;
  vmrs_system_enabled: boolean;
  vmrs_assembly_enabled: boolean;
  vmrs_component_enabled: boolean;
  disable_reason_for_repair_editing: boolean;
  disable_system_assembly_component_editing: boolean;
  require_vmrs_reason_for_repair_on_service_line_items_as_of: string | null;
  require_vmrs_system_group_on_service_line_items_as_of: string | null;
}

export interface ListAccountsApiResponse
  extends ListApiResponse<
    {
      account_name?: LikeEqual;
      account_url_token?: Equal;
      created_at?: LtLteGtGte;
      updated_at?: LtLteGtGte;
    },
    Account,
    {
      id: SortDirection;
      created_at: SortDirection;
      updated_date: SortDirection;
    }
  > {}

type OptionsWithOptionalAccountTokenHeader = Omit<
  ApiOptions<{ account_name?: LikeEqual; account_url_token?: Equal }, {}>,
  "headers"
> & {
  headers: Omit<ApiHeaders, "Account-Token"> & { "Account-Token"?: string };
};
export interface ListAccountsOptions
  extends OptionsWithOptionalAccountTokenHeader {}

export function listAccounts(options: ListAccountsOptions) {
  const { endpoint, method } = getApiRoute("ACCOUNTS", "LIST_ACCOUNTS");
  const accountApi = new ApiClient(BASE_URL);
  return accountApi.request<ListAccountsApiResponse>({
    endpoint,
    method,
    headers: options.headers,
    params: options.queryParams,
  });
}
