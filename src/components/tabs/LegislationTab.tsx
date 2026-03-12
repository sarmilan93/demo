import { useState, useCallback } from "react";
import { useAppContext } from "../../context/AppContext";
import { LawCard } from "../legislation/LawCard";
import { PlusIcon } from "../common/icons";
import { INITIAL_COMPONENTS, COLORS, FONTS, SPACING } from "../../constants";
import { LawComponent, ComponentStatus } from "../../types";

export const LegislationTab: React.FC = () => {
  const { setCurrentView, setSelectedComponentId } = useAppContext();
  const [components, setComponents] = useState<LawComponent[]>(INITIAL_COMPONENTS);
  const [isAddHovered, setIsAddHovered] = useState(false);

  const handleIgnore = useCallback((id: string) => {
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id
          ? {
              ...component,
              previousStatus: component.status,
              status: "ignored" as ComponentStatus,
            }
          : component
      )
    );
  }, []);

  const handleReview = useCallback(
    (id: string) => {
      setSelectedComponentId(id);
      setCurrentView("conceptRecord");
    },
    [setCurrentView, setSelectedComponentId]
  );

  const handleReviewAgain = useCallback((id: string) => {
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id
          ? {
              ...component,
              status: (component.previousStatus ?? "new") as ComponentStatus,
              previousStatus: null,
            }
          : component
      )
    );
  }, []);

  const handleAdd = useCallback(() => {
    setComponents((prev) => [
      ...prev,
      {
        id: `comp-${Date.now()}`,
        title: `Article ${prev.filter((c) => !c.isMainAct).length + 1}`,
        description: "",
        status: "new",
        previousStatus: null,
        type: "legislative",
        isMainAct: false,
      },
    ]);
  }, []);

  return (
    <div style={{ padding: SPACING.xxl, height: "fit-content", overflowY: "auto", border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            backgroundColor: COLORS.white, }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: SPACING.xl,
        }}
      >
        <div
          style={{
            fontSize: FONTS.size.xl,
            fontWeight: FONTS.weight.bold,
            color: COLORS.text,
            fontFamily: FONTS.family,
          }}
        >
          Document Content
        </div>
        <button
          onClick={handleAdd}
          onMouseEnter={() => setIsAddHovered(true)}
          onMouseLeave={() => setIsAddHovered(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            borderRadius: 6,
            backgroundColor: isAddHovered ? "#F0F4F8" : "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: FONTS.size.lg,
            fontWeight: FONTS.weight.medium,
            color: COLORS.primary,
            fontFamily: FONTS.family,
            transition: "background-color 0.15s",
          }}
        >
          <PlusIcon /> Add New Item
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: SPACING.lg }}>
        {components.map((component) => (
          <LawCard
            key={component.id}
            component={component}
            onIgnore={handleIgnore}
            onReview={handleReview}
            onReviewAgain={handleReviewAgain}
          />
        ))}
      </div>
    </div>
  );
};
