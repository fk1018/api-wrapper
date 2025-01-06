// src/types/api-types.ts
import { OnePropertyOf } from "./utility-types";
export type OK = "OK";
export interface ListApiResponse<Filters = {}, Record = {}, Sorted = {}> {
  estimated_remaining_count?: number;
  filtered_by?: OnePropertyOf<Filters>[];
  next_cursor?: string;
  per_page?: number;
  records?: Record[];
  sorted_by?: OnePropertyOf<Sorted>[];
  start_cursor: string;
}
export interface ApiOptions<F = {}, H = {}, S = {}> {
  apiKey: string;
  accountToken: string;
  headers: ApiHeaders & H;
  queryParams?: {
    start_cursor?: string;
    per_page?: ResultsPerPage;
    filter?: {
      created_at?: LtLteGtGte;
      updated_at?: LtLteGtGte;
    } & F;
    sort?: {
      created_at?: SortDirection;
      id?: SortDirection;
      updated_at?: SortDirection;
    } & S;
  };
}

export type Like = { like: string };
export type Equal = { eq: string };
export type LikeEqual = OnePropertyOf<Like & Equal>;
// @todo investgate if can harden these types for lt, lte, gt, and gte ex: `${number}-${number}-${number}`
export type LtLteGtGte = OnePropertyOf<{
  gt: string;
  gte: string;
  lt: string;
  lte: string;
}>;
export interface ApiHeaders {
  Accept: "application/json";
  "Account-Token": `${string}`;
  Authorization: `Token ${string}`;
  "X-Api-Version": SupportedApiVersion;
  [key: string]: string;
}
export type SupportedApiVersion =
  | "2024-06-30" /*| "2024-03-15" | "2024-01-01" | "2023-03-01"*/;
export type SortDirection = "asc" | "desc";
export type ResultsPerPage =
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
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100;
