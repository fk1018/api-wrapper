// src/api/accounts/createAccount.ts
import { getApiRoute } from "../../api-routes";
import { BASE_URL } from "../../config";
import { ApiOptions, OK } from "../../types/api-types";
import { ApiClient } from "../../utils/api-client";
export interface CreateAccountOptions
  extends ApiOptions<
    {},
    {
      "Partner-Token": string;
      "Organization-Token": string;
      "Content-Type": "application/json";
    }
  > {
  body: CreateAccountBody;
}
export interface CreateAccountBody {
  user_full_name: string;
  user_email: string;
  user_password: string;
  account_name: string;
  account_industry?:
    | "Transportation & Logistics"
    | "Rental & Leasing"
    | "Consumer/Business Services"
    | "Construction Contractors & Services"
    | "Government"
    | "Energy"
    | "Utilities & Mining"
    | "Retail"
    | "Wholesale & Manufacturing"
    | "Information & Telecommunications"
    | "Education"
    | "Arts"
    | "Entertainment & Recreation"
    | "Non-Profit/Religious Organizations"
    | "Other";
  account_phone_number?: string;
  account_date_format?:
    | "mmddyyy_slash"
    | "dmmyyyy_slash"
    | "ddmmyyyy_dot"
    | "yyyymmdd_dot"
    | "yyyymmdd_slash"
    | "yyyymmdd_dash";
  account_currency?: string;
  account_time_24_format?: string;
  account_street_address?: string;
  account_city?: string;
  account_region?: string;
  account_postal_code?: string;
  account_country?: string;
  account_web_session_timeout_minutes?: string;
  account_go_session_timeout_minutes?: string;
  account_time_zone?:
    | "International Date Line West"
    | "American Samoa"
    | "Midway Island"
    | "Hawaii"
    | "Alaska"
    | "Pacific Time (US & Canada)"
    | "Tijuana"
    | "Arizona"
    | "Chihuahua"
    | "Mazatlan"
    | "Mountain Time (US & Canada)"
    | "Central America"
    | "Central Time (US & Canada)"
    | "Guadalajara"
    | "Mexico City"
    | "Monterrey"
    | "Saskatchewan"
    | "Bogota"
    | "Eastern Time (US & Canada)"
    | "Indiana (East)"
    | "Lima"
    | "Quito"
    | "Atlantic Time (Canada)"
    | "Caracas"
    | "Georgetown"
    | "La Paz"
    | "Puerto Rico"
    | "Santiago"
    | "Newfoundland"
    | "Brasilia"
    | "Buenos Aires"
    | "Greenland"
    | "Montevideo"
    | "Mid-Atlantic"
    | "Azores"
    | "Cape Verde Is."
    | "Casablanca"
    | "Dublin"
    | "Edinburgh"
    | "Lisbon"
    | "London"
    | "Monrovia"
    | "UTC"
    | "Amsterdam"
    | "Belgrade"
    | "Berlin"
    | "Bern"
    | "Bratislava"
    | "Brussels"
    | "Budapest"
    | "Copenhagen"
    | "Ljubljana"
    | "Madrid"
    | "Paris"
    | "Prague"
    | "Rome"
    | "Sarajevo"
    | "Skopje"
    | "Stockholm"
    | "Vienna"
    | "Warsaw"
    | "West Central Africa"
    | "Zagreb"
    | "Zurich"
    | "Athens"
    | "Bucharest"
    | "Cairo"
    | "Harare"
    | "Helsinki"
    | "Jerusalem"
    | "Kaliningrad"
    | "Kyiv"
    | "Pretoria"
    | "Riga"
    | "Sofia"
    | "Tallinn"
    | "Vilnius"
    | "Baghdad"
    | "Istanbul"
    | "Kuwait"
    | "Minsk"
    | "Moscow"
    | "Nairobi"
    | "Riyadh"
    | "St. Petersburg"
    | "Volgograd"
    | "Tehran"
    | "Abu Dhabi"
    | "Baku"
    | "Muscat"
    | "Samara"
    | "Tbilisi"
    | "Yerevan"
    | "Kabul"
    | "Ekaterinburg"
    | "Islamabad"
    | "Karachi"
    | "Tashkent"
    | "Chennai"
    | "Kolkata"
    | "Mumbai"
    | "New Delhi"
    | "Sri Jayawardenepura"
    | "Kathmandu"
    | "Almaty"
    | "Astana"
    | "Dhaka"
    | "Urumqi"
    | "Rangoon"
    | "Bangkok"
    | "Hanoi"
    | "Jakarta"
    | "Krasnoyarsk"
    | "Novosibirsk"
    | "Beijing"
    | "Chongqing"
    | "Hong Kong"
    | "Irkutsk"
    | "Kuala Lumpur"
    | "Perth"
    | "Singapore"
    | "Taipei"
    | "Ulaanbaatar"
    | "Osaka"
    | "Sapporo"
    | "Seoul"
    | "Tokyo"
    | "Yakutsk"
    | "Adelaide"
    | "Darwin"
    | "Brisbane"
    | "Canberra"
    | "Guam"
    | "Hobart"
    | "Melbourne"
    | "Port Moresby"
    | "Sydney"
    | "Vladivostok"
    | "Magadan"
    | "New Caledonia"
    | "Solomon Is."
    | "Srednekolymsk"
    | "Auckland"
    | "Fiji"
    | "Kamchatka"
    | "Marshall Is."
    | "Wellington"
    | "Chatham Is."
    | "Nuku'alofa"
    | "Samoa"
    | "Tokelau Is.";
  plan?: "professional" | "premium";
}
export function createAccount(options: CreateAccountOptions) {
  const { endpoint, method } = getApiRoute("ACCOUNTS", "CREATE_ACCOUNT");
  const createAccountApi = new ApiClient(BASE_URL);
  return createAccountApi.request<OK>({
    endpoint,
    method,
    headers: options.headers,
    params: options.queryParams,
    body: options.body,
  });
}
