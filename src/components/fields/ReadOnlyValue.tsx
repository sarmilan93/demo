import { COLORS, FONTS, SPACING } from "../../constants";

interface ReadOnlyValueProps {
  label: string;
  value: string;
}

export const ReadOnlyValue: React.FC<ReadOnlyValueProps> = ({ label, value }) => (
  <div style={{ marginBottom: SPACING.lg }}>
    <div
      style={{
        fontSize: FONTS.size.lg,
        fontWeight: FONTS.weight.semibold,
        color: COLORS.textSecondary,
        marginBottom: 4,
        fontFamily: FONTS.family,
        textTransform: "uppercase",
        letterSpacing: 0.3,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: FONTS.size.lg,
        color: COLORS.text,
        fontFamily: FONTS.family,
        wordBreak: "break-all",
      }}
    >
      {value || "—"}
    </div>
  </div>
);
