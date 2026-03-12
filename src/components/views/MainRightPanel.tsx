import { useMemo } from "react";
import { MainTabId } from "../../types";
import { AcquisitionTab } from "../tabs/AcquisitionTab";
import { DocumentTab } from "../tabs/DocumentTab";
import { LegislationTab } from "../tabs/LegislationTab";
import { COLORS } from "../../constants";

interface MainRightPanelProps {
  activeTab: MainTabId;
}

export const MainRightPanel: React.FC<MainRightPanelProps> = ({ activeTab }) => {
  const content = useMemo(() => {
    switch (activeTab) {
      case "acquisition":
        return <AcquisitionTab />;
      case "document":
        return <DocumentTab />;
      case "legislation":
        return <LegislationTab />;
    }
  }, [activeTab]);

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        background: COLORS.mainBackground,
      }}
    >
      {content}
    </div>
  );
};
