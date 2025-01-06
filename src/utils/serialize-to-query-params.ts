// src/utils/serialize-to-query-params.ts
export function serializeToQueryParams(
  obj: Record<string, any>,
  prefix: string = ""
): string {
  const parts: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const encodedKey = encodeURIComponent(key);
      const fullKey = prefix ? `${prefix}[${encodedKey}]` : encodedKey;

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            parts.push(`${fullKey}[]=${encodeURIComponent(value[i])}`);
          }
        } else {
          parts.push(serializeToQueryParams(value, fullKey));
        }
      } else if (value !== undefined && value !== null) {
        parts.push(`${fullKey}=${encodeURIComponent(value)}`);
      }
    }
  }

  return parts.join("&");
}
