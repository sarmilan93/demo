import { useState, useMemo, useCallback } from "react";
import { COLORS, FONTS } from "../../../constants";
import { ddmmyyyyToIso, isoToDdmmyyyy } from "../../../utils";

interface DateInputProps {
  fieldKey: string;
  value: string;
  onChange: (key: string, value: string) => void;
  readOnly?: boolean;
  includeTime?: boolean;
  hasError?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({
  fieldKey,
  value,
  onChange,
  readOnly = false,
  includeTime = false,
  hasError = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isoValue = useMemo(() => ddmmyyyyToIso(value), [value]);

  const handleDateChange = useCallback(
    (newIso: string) => {
      onChange(fieldKey, isoToDdmmyyyy(newIso));
    },
    [fieldKey, onChange]
  );

  return (
    <input
      type={includeTime ? "datetime-local" : "date"}
      value={isoValue}
      onChange={(e) => handleDateChange(e.target.value)}
      readOnly={readOnly}
      disabled={readOnly}
      placeholder="Pick a date"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        width: "100%",
        height: 40,
        padding: "0 12px",
        fontSize: FONTS.size.lg,
        fontFamily: FONTS.family,
        color: isoValue ? COLORS.text : COLORS.textMuted,
        backgroundColor: readOnly ? COLORS.readOnlyBackground : COLORS.white,
        border: `1px solid ${
          hasError
            ? COLORS.error
            : isFocused
            ? COLORS.inputFocus
            : COLORS.inputBorder
        }`,
        borderRadius: 6,
        outline: "none",
        boxSizing: "border-box",
        cursor: readOnly ? "default" : "pointer",
        transition: "border-color 0.15s",
      }}
    />
  );
};
