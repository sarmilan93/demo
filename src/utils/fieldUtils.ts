import {
  MetadataField,
  FormValues,
} from "../types";

export const getFieldDefault = (field: MetadataField): string | boolean => {
  if (field.dataType === "checkbox") {
    return (field).defaultValue ?? false;
  }
  if (field.dataType === "dropdown") {
    return (field).selectedValue ?? "";
  }
  return (field).value ?? "";
};

export const buildDefaultFormValues = (
  fieldSets: MetadataField[][]
): FormValues => {
  const values: FormValues = {};
  fieldSets.forEach((fieldSet) => {
    fieldSet.forEach((field) => {
      values[field.key] = getFieldDefault(field);
    });
  });
  return values;
};
