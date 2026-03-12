import { useState, ReactNode } from "react";
import { COLORS, FONTS, SPACING } from "../../constants";
import { ChevronUpIcon, ChevronDownLargeIcon } from "../common/icons";

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{ marginBottom: SPACING.xxl }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: `${SPACING.xl}px 0`,
          background: "none",
          border: "none",
          cursor: "pointer",
          borderBottom: `1px solid ${COLORS.sectionBorder}`,
        }}
      >
        <span
          style={{
            fontSize: FONTS.size.xxl,
            fontWeight: FONTS.weight.bold,
            color: COLORS.text,
            fontFamily: FONTS.family,
          }}
        >
          {title}
        </span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownLargeIcon />}
      </button>
      {isOpen && <div style={{ paddingTop: SPACING.xxl }}>{children}</div>}
    </div>
  );
};
