// src/config.ts
export const BASE_URL =
  process.env.API_WRAPPER_API_BASE_URL || "https://secure.fleetio.com/api";

if (
  !process.env.API_WRAPPER_API_BASE_URL &&
  process.env.NODE_ENV === "production"
) {
  console.warn(
    "API_WRAPPER_API_BASE_URL environment variable is not set in production. Using default value."
  );
}
