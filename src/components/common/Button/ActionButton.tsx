import { useState } from "react";
import { COLORS, FONTS } from "../../../constants";

interface ActionButtonProps {
  label: string;
  variant: "primary" | "secondary";
  onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  variant,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        height: 44,
        backgroundColor: isPrimary
          ? isHovered
            ? COLORS.primaryHover
            : COLORS.primary
          : isHovered
          ? COLORS.background
          : COLORS.white,
        color: isPrimary ? COLORS.white : COLORS.text,
        border: isPrimary ? "none" : `1px solid ${COLORS.inputBorder}`,
        borderRadius: 6,
        fontSize: FONTS.size.lg,
        fontWeight: isPrimary ? FONTS.weight.semibold : FONTS.weight.medium,
        fontFamily: FONTS.family,
        cursor: "pointer",
        transition: "background-color 0.15s",
      }}
    >
      {label}
    </button>
  );
};
