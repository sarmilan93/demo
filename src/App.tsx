import { useState } from "react";
import { AppProvider } from "./context/AppProvider";
import { useAppContext } from "./context/AppContext";
import { Header } from "./components/layout/Header";
import { TabBar } from "./components/layout/TabBar";
import { DocumentViewer } from "./components/viewer/DocumentViewer";
import { MainRightPanel } from "./components/views/MainRightPanel";
import { ConceptRecordView } from "./components/views/ConceptRecordView";
import { MainTabId } from "./types";
import { COLORS } from "./constants/colors";
import "./App.css";

const AppLayout: React.FC = () => {
  const { currentView } = useAppContext();
  const [activeTab, setActiveTab] = useState<MainTabId>("acquisition");

  if (currentView === "conceptRecord") {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
        <Header />
        <div style={{ flex: 1, overflow: "hidden" }}>
          <ConceptRecordView />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <Header />

      <div style={{ display: "flex", flex: 1, overflow: "hidden", background: COLORS.mainBackground }}>
        {/* Left: Document Viewer */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <DocumentViewer />
        </div>

        {/* Right: TabBar + MainRightPanel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <TabBar activeTab={activeTab} onChange={setActiveTab} />
          <MainRightPanel activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

export default App;