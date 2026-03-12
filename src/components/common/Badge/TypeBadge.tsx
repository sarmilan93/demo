import { ComponentType } from "../../../types";
import { TYPE_STYLES, FONTS } from "../../../constants";

interface TypeBadgeProps {
  type: ComponentType;
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const style = TYPE_STYLES[type];

  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 4,
        fontSize: FONTS.size.lg,
        fontWeight: FONTS.weight.medium,
        fontFamily: FONTS.family,
        backgroundColor: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        lineHeight: "16px",
      }}
    >
      {style.label}
    </span>
  );
};
