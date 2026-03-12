import { useCallback, useMemo } from "react";
import { useAppContext } from "../../context/AppContext";
import { FieldRenderer } from "../fields/FieldRenderer";
import { ActionButton } from "../common/Button/ActionButton";
import { COLORS, SPACING } from "../../constants";
import { getFieldDefault, isEmpty, downloadReviewedRecord } from "../../utils";
import { ValidationError } from "../../types";

export const DocumentTab: React.FC = () => {
  const { config, formState, dispatch, validationErrors, setValidationErrors } =
    useAppContext();
  const fields = config.tabs.document;
  const errorKeys = useMemo(
    () => new Set(validationErrors.map((e) => e.key)),
    [validationErrors]
  );

  const handleChange = useCallback(
    (key: string, value: string | boolean) => {
      dispatch({ type: "SET_FIELD", key, value });
      setValidationErrors((prev) => prev.filter((e) => e.key !== key));
    },
    [dispatch, setValidationErrors]
  );

  const handleSubmit = useCallback(() => {
    const requiredFields = config.validationRules.requiredOnSubmit;
    const documentKeys = new Set(fields.map((f) => f.key));
    const missing: ValidationError[] = [];

    requiredFields.forEach((key) => {
      if (documentKeys.has(key) && isEmpty(formState.values[key])) {
        const field = fields.find((f) => f.key === key);
        if (field) {
          missing.push({ key, label: field.label });
        }
      }
    });

    if (missing.length > 0) {
      setValidationErrors(missing);
      return;
    }

    setValidationErrors([]);
    dispatch({ type: "SUBMIT" });
    downloadReviewedRecord(config, formState.values);
  }, [config, fields, formState.values, dispatch, setValidationErrors]);

  const handleSave = useCallback(() => {
    setValidationErrors([]);
    dispatch({ type: "SAVE_DRAFT" });
  }, [dispatch, setValidationErrors]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "fit-content", border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            backgroundColor: COLORS.white, }}>
      <div style={{ flex: 1, padding: SPACING.xxl, overflowY: "auto" }}>
        {fields.map((field) => (
          <div key={field.key} style={{ marginBottom: SPACING.xl }}>
            <FieldRenderer
              field={field}
              value={formState.values[field.key] ?? getFieldDefault(field)}
              onChange={handleChange}
              hasError={errorKeys.has(field.key)}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          padding: `${SPACING.lg}px ${SPACING.xxl}px ${SPACING.xxl}px`,
          borderTop: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.white,
          display: "flex",
          flexDirection: "column",
          gap: SPACING.sm,
        }}
      >
        <ActionButton
          label="Submit Reviewed Record"
          variant="primary"
          onClick={handleSubmit}
        />
        <ActionButton label="Save Draft" variant="secondary" onClick={handleSave} />
      </div>
    </div>
  );
};
