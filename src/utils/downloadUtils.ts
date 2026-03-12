import { SlovakiaConfig } from "../types";
import { FormValues } from "../types";

function labelToSnakeCase(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

export function downloadReviewedRecord(
  config: SlovakiaConfig,
  values: FormValues
): void {
  const allFields = [
    ...config.tabs.acquisition,
    ...config.tabs.document,
    ...config.tabs.conceptRecord,
    ...config.tabs.relationalMetadata,
  ];

  const result: Record<string, string> = {};

  allFields.forEach((field) => {
    const jsonKey = labelToSnakeCase(field.label);
    const value = values[field.key];
    result[jsonKey] = value !== undefined && value !== null ? String(value) : "";
  });

  const blob = new Blob([JSON.stringify(result, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "reviewed_record.json";
  a.click();
  URL.revokeObjectURL(url);
}
