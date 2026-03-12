import { useAppContext } from "../../context/AppContext";
import { ReadOnlyValue } from "../fields/ReadOnlyValue";
import { StringField } from "../../types";
import { COLORS, SPACING } from "../../constants";

export const AcquisitionTab: React.FC = () => {
  const { config } = useAppContext();

  return (
    <div style={{ padding: SPACING.xxl, border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            backgroundColor: COLORS.white, }}>
      {config.tabs.acquisition.map((field) => {
        const value = (field as StringField).value ?? "";

        if (field.key === "createDate") {
          const now = new Date();
          return (
            <div key={field.key} style={{ display: "flex", gap: SPACING.xxl }}>
              <div style={{ flex: 1 }}>
                <ReadOnlyValue
                  label="Created On"
                  value={now.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                />
              </div>
              <div style={{ flex: 1 }}>
                <ReadOnlyValue
                  label="Created At"
                  value={now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                />
              </div>
            </div>
          );
        }

        return <ReadOnlyValue key={field.key} label={field.label} value={value} />;
      })}
    </div>
  );
};
