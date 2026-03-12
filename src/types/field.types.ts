export interface BaseField {
  key: string;
  label: string;
  dataType: "string" | "dropdown" | "datetime" | "date" | "checkbox" | "link";
  required: boolean;
  readOnly: boolean;
  comments?: string;
  layout?: "full" | "half";
}

export interface StringField extends BaseField {
  dataType: "string" | "datetime" | "date" | "link";
  value: string;
}

export interface DropdownField extends BaseField {
  dataType: "dropdown";
  selectedValue: string;
  options: string[];
}

export interface CheckboxField extends BaseField {
  dataType: "checkbox";
  defaultValue: boolean;
}

export type MetadataField = StringField | DropdownField | CheckboxField;
