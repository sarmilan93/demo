import { useState } from "react";
import { LawComponent } from "../../types";
import { StatusBadge } from "../common/Badge/StatusBadge";
import { TypeBadge } from "../common/Badge/TypeBadge";
import { DocumentIcon, MoreIcon } from "../common/icons";
import { COLORS, FONTS, SPACING } from "../../constants";

interface LawCardProps {
  component: LawComponent;
  onIgnore: (id: string) => void;
  onReview: (id: string) => void;
  onReviewAgain: (id: string) => void;
}

export const LawCard: React.FC<LawCardProps> = ({
  component,
  onIgnore,
  onReview,
  onReviewAgain,
}) => {
  const [isIgnoreHovered, setIsIgnoreHovered] = useState(false);
  const [isReviewHovered, setIsReviewHovered] = useState(false);
  const isIgnored = component.status === "ignored";

  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        borderRadius: 8,
        backgroundColor: isIgnored ? COLORS.ignored : COLORS.white,
        opacity: isIgnored ? 0.7 : 1,
        transition: "all 0.15s",
      }}
    >
      <div style={{ padding: `${SPACING.lg}px ${SPACING.xl}px ${SPACING.md}px` }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: SPACING.md,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: SPACING.md,
              flex: 1,
              minWidth: 0,
            }}
          >
            <div style={{ flexShrink: 0, marginTop: 2 }}>
              <DocumentIcon />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: FONTS.size.lg,
                  fontWeight: FONTS.weight.semibold,
                  color: COLORS.text,
                  fontFamily: FONTS.family,
                  marginBottom: 6,
                }}
              >
                {component.isMainAct ? "Main Act" : component.title}
              </div>
              <div
                style={{
                  fontSize: FONTS.size.lg,
                  color: COLORS.text,
                  fontFamily: FONTS.family,
                  fontWeight: FONTS.weight.medium,
                  lineHeight: 1.5,
                  wordBreak: "break-word",
                }}
              >
                {component.description}
              </div>
            </div>
          </div>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexShrink: 0,
              borderRadius: 4,
            }}
          >
            <MoreIcon />
          </button>
        </div>
      </div>

      <div
        style={{
          padding: `0 ${SPACING.xl}px ${SPACING.md}px`,
          display: "flex",
          gap: SPACING.sm,
          paddingLeft: 52,
        }}
      >
        <StatusBadge status={component.status} />
        <TypeBadge type={component.type} />
      </div>

      <div
        style={{
          display: "flex",
          gap: SPACING.sm,
          padding: `${SPACING.md}px ${SPACING.xl}px ${SPACING.lg}px`,
          justifyContent: "flex-end",
        }}
      >
        {isIgnored ? (
          <button
            onClick={() => onReviewAgain(component.id)}
            onMouseEnter={() => setIsReviewHovered(true)}
            onMouseLeave={() => setIsReviewHovered(false)}
            style={{
              height: 32,
              borderRadius: 6,
              padding: "0 20px",
              backgroundColor: isReviewHovered
                ? COLORS.primaryHover
                : COLORS.primary,
              color: COLORS.white,
              border: "none",
              fontSize: FONTS.size.lg,
              fontWeight: FONTS.weight.semibold,
              fontFamily: FONTS.family,
              cursor: "pointer",
              transition: "background-color 0.15s",
            }}
          >
            Review Again
          </button>
        ) : (
          <>
            <button
              onClick={() => onIgnore(component.id)}
              onMouseEnter={() => setIsIgnoreHovered(true)}
              onMouseLeave={() => setIsIgnoreHovered(false)}
              style={{
                height: 32,
                borderRadius: 6,
                padding: "0 20px",
                backgroundColor: isIgnoreHovered ? "#F3F4F6" : COLORS.white,
                color: COLORS.text,
                border: `1px solid ${COLORS.inputBorder}`,
                fontSize: FONTS.size.lg,
                fontWeight: FONTS.weight.medium,
                fontFamily: FONTS.family,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
            >
              Ignore
            </button>
            <button
              onClick={() => onReview(component.id)}
              onMouseEnter={() => setIsReviewHovered(true)}
              onMouseLeave={() => setIsReviewHovered(false)}
              style={{
                height: 32,
                borderRadius: 6,
                padding: "0 20px",
                backgroundColor: isReviewHovered
                  ? COLORS.primaryHover
                  : COLORS.primary,
                color: COLORS.white,
                border: "none",
                fontSize: FONTS.size.lg,
                fontWeight: FONTS.weight.semibold,
                fontFamily: FONTS.family,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
            >
              Review
            </button>
          </>
        )}
      </div>
    </div>
  );
};
