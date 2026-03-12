import { FormState, FormAction } from "../types";

export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.key]: action.value },
        isDirty: true,
        isSubmitted: false,
      };
    case "RESET":
      return {
        values: action.payload,
        isDirty: false,
        isSubmitted: false,
      };
    case "SAVE_DRAFT":
      return {
        ...state,
        isDirty: false,
      };
    case "SUBMIT":
      return {
        ...state,
        isDirty: false,
        isSubmitted: true,
      };
    default:
      return state;
  }
};
