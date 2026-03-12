import { ComponentStatus } from "../../../types";
import { STATUS_STYLES, FONTS } from "../../../constants";

interface StatusBadgeProps {
  status: ComponentStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const style = STATUS_STYLES[status];

  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 4,
        fontSize: FONTS.size.lg,
        fontWeight: FONTS.weight.semibold,
        fontFamily: FONTS.family,
        backgroundColor: style.bg,
        color: style.color,
        lineHeight: "16px",
      }}
    >
      {style.label}
    </span>
  );
};
