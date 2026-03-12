import { COLORS, FONTS } from "../../../constants";
import { CheckIcon } from "../icons";

interface CheckboxInputProps {
  fieldKey: string;
  checked: boolean;
  onChange: (key: string, value: boolean) => void;
  label: string;
  readOnly?: boolean;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  fieldKey,
  checked,
  onChange,
  label,
  readOnly = false,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: readOnly ? "default" : "pointer",
    }}
    onClick={() => {
      if (!readOnly) onChange(fieldKey, !checked);
    }}
  >
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: 4,
        border: `1.5px solid ${checked ? COLORS.primary : COLORS.inputBorder}`,
        backgroundColor: checked ? COLORS.primary : COLORS.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
      }}
    >
      {checked && <CheckIcon />}
    </div>
    <span
      style={{
        fontSize: FONTS.size.lg,
        color: COLORS.text,
        fontFamily: FONTS.family,
      }}
    >
      {label}
    </span>
  </div>
);
