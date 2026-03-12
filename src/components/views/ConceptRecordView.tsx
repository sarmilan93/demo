import { useCallback, useMemo } from "react";
import { useAppContext } from "../../context/AppContext";
import { CollapsibleSection } from "../sections/CollapsibleSection";
import { FieldsGrid } from "../fields/FieldsGrid";
import { ActionButton } from "../common/Button/ActionButton";
import { BackIcon } from "../common/icons";
import { CONCEPT_HALF_PAIRS, RELATION_HALF_PAIRS, COLORS, FONTS, SPACING } from "../../constants";
import { isEmpty, downloadReviewedRecord } from "../../utils";
import { ValidationError } from "../../types";

export const ConceptRecordView: React.FC = () => {
  const {
    config,
    formState,
    dispatch,
    validationErrors,
    setValidationErrors,
    setCurrentView,
  } = useAppContext();

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

  const allFields = useMemo(
    () => [...config.tabs.conceptRecord, ...config.tabs.relationalMetadata],
    [config]
  );

  const handleSubmit = useCallback(() => {
    const requiredFields = config.validationRules.requiredOnSubmit;
    const allKeys = new Set(allFields.map((f) => f.key));
    const missing: ValidationError[] = [];

    requiredFields.forEach((key) => {
      if (allKeys.has(key) && isEmpty(formState.values[key])) {
        const field = allFields.find((f) => f.key === key);
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
  }, [config, allFields, formState.values, dispatch, setValidationErrors]);

  const handleSave = useCallback(() => {
    setValidationErrors([]);
    dispatch({ type: "SAVE_DRAFT" });
  }, [dispatch, setValidationErrors]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: COLORS.background,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 48,
          padding: `0 ${SPACING.xl}px`,
          backgroundColor: COLORS.white,
          borderBottom: `1px solid ${COLORS.border}`,
          flexShrink: 0,
          gap: SPACING.md,
        }}
      >
        <button
          onClick={() => setCurrentView("main")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
            width: 32,
            height: 32,
          }}
        >
          <BackIcon />
        </button>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: FONTS.size.lg,
            fontWeight: FONTS.weight.semibold,
            color: COLORS.text,
            fontFamily: FONTS.family,
          }}
        >
          Concept Record
        </div>
        <div style={{ width: 32 }} />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: SPACING.xxl }}>
        <div
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            border: `1px solid ${COLORS.border}`,
            padding: `${SPACING.lg}px ${SPACING.xxl}px ${SPACING.xxl}px`,
          }}
        >
          <CollapsibleSection title="Concept Metadata" defaultOpen={false}>
            <FieldsGrid
              fields={config.tabs.conceptRecord}
              halfPairs={CONCEPT_HALF_PAIRS}
              values={formState.values}
              onChange={handleChange}
              errorKeys={errorKeys}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Relational Metadata" defaultOpen={false}>
            <FieldsGrid
              fields={config.tabs.relationalMetadata}
              halfPairs={RELATION_HALF_PAIRS}
              values={formState.values}
              onChange={handleChange}
              errorKeys={errorKeys}
            />
          </CollapsibleSection>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: SPACING.sm,
              marginTop: SPACING.lg,
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
      </div>
    </div>
  );
};
