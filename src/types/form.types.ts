export type FormValues = Record<string, string | boolean>;

export type FormAction =
  | { type: "SET_FIELD"; key: string; value: string | boolean }
  | { type: "RESET"; payload: FormValues }
  | { type: "SAVE_DRAFT" }
  | { type: "SUBMIT" };

export interface FormState {
  values: FormValues;
  isDirty: boolean;
  isSubmitted: boolean;
}

export interface ValidationError {
  key: string;
  label: string;
}
