import { MainTabId } from "../../types";
import { COLORS, FONTS, SPACING, MAIN_TABS } from "../../constants";

interface TabBarProps {
  activeTab: MainTabId;
  onChange: (tab: MainTabId) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ activeTab, onChange }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `none`,
      backgroundColor: COLORS.mainBackground,
      padding: `0 ${SPACING.lg}px`,
      margin: "20px 0",
      flexShrink: 0,
    }}
  >
    {MAIN_TABS.map((tab) => {
      const isActive = activeTab === tab.id;
      return (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            padding: `${SPACING.sm}px ${SPACING.xl}px`,
            fontSize: FONTS.size.lg,
            fontWeight: isActive ? FONTS.weight.semibold : FONTS.weight.medium,
            fontFamily: FONTS.family,
            color: isActive ? COLORS.primary : COLORS.textSecondary,
            background: isActive ? COLORS.white : COLORS.mainBackground,
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.15s",
            marginBottom: -1,
            whiteSpace: "nowrap",
            boxShadow: isActive ? "0 6px 12px rgba(0, 0, 0, 0.22)" : "none",
          }}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);
