import { COLORS, FONTS } from "../../constants";

interface FieldLabelProps {
  label: string;
  required: boolean;
  readOnly?: boolean;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  label,
  required,
  readOnly,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 6 }}>
    <span
      style={{
        fontSize: FONTS.size.lg,
        fontWeight: FONTS.weight.medium,
        color: COLORS.text,
        fontFamily: FONTS.family,
      }}
    >
      {label}
    </span>
    {required && !readOnly && (
      <span
        style={{
          color: COLORS.error,
          fontSize: FONTS.size.lg,
          fontWeight: FONTS.weight.bold,
          marginLeft: 1,
        }}
      >
        *
      </span>
    )}
  </div>
);
