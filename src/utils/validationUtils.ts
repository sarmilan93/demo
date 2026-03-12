export const isEmpty = (value: string | boolean | undefined): boolean => {
  if (value === undefined || value === null) return true;
  if (typeof value === "boolean") return false;
  return value.trim() === "";
};
