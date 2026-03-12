import { useState } from "react";
import { COLORS, FONTS } from "../../../constants";
import { ChevronDownIcon } from "../icons";

interface SelectInputProps {
  fieldKey: string;
  value: string;
  options: string[];
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  hasError?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  fieldKey,
  value,
  options,
  onChange,
  placeholder = "Journal title",
  readOnly = false,
  hasError = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(e) => onChange(fieldKey, e.target.value)}
        disabled={readOnly}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "100%",
          height: 40,
          padding: "0 32px 0 12px",
          fontSize: FONTS.size.lg,
          fontFamily: FONTS.family,
          color: value ? COLORS.text : COLORS.textMuted,
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
          appearance: "none",
          cursor: readOnly ? "default" : "pointer",
          transition: "border-color 0.15s",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <ChevronDownIcon />
      </div>
    </div>
  );
};
