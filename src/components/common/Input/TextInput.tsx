import { useState } from "react";
import { COLORS, FONTS } from "../../../constants";

interface TextInputProps {
  fieldKey: string;
  value: string;
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  hasError?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  fieldKey,
  value,
  onChange,
  placeholder = "",
  readOnly = false,
  hasError = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(fieldKey, e.target.value)}
      readOnly={readOnly}
      placeholder={readOnly ? "" : placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        width: "100%",
        height: 40,
        padding: "0 12px",
        fontSize: FONTS.size.lg,
        fontFamily: FONTS.family,
        color: readOnly ? COLORS.textSecondary : COLORS.text,
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
        cursor: readOnly ? "default" : "text",
        transition: "border-color 0.15s",
      }}
    />
  );
};
