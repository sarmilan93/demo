import { COLORS, FONTS, SPACING } from "../../constants";
import { BackIcon } from "../common/icons";

export const Header: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 56,
      padding: `0 ${SPACING.xl}px`,
      backgroundColor: COLORS.white,
      borderBottom: `1px solid ${COLORS.border}`,
      flexShrink: 0,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: SPACING.md }}>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
          display: "flex",
        }}
      >
        <BackIcon />
      </button>
      <img
        src="/SubMark Logo.png"
        alt="SubMark Logo"
        style={{ height: 32, objectFit: "contain" }}
      />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: SPACING.md }}>
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: FONTS.size.lg,
            fontWeight: FONTS.weight.semibold,
            color: COLORS.text,
            fontFamily: FONTS.family,
          }}
        >
          Admin Name
        </div>
        <div
          style={{
            fontSize: FONTS.size.lg,
            color: COLORS.textMuted,
            fontFamily: FONTS.family,
          }}
        >
          admin@gmail.com
        </div>
      </div>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          backgroundColor: COLORS.primary,
          color: COLORS.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: FONTS.size.lg,
          fontWeight: FONTS.weight.semibold,
          fontFamily: FONTS.family,
        }}
      >
        CN
      </div>
    </div>
  </div>
);
