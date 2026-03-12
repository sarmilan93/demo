import { COLORS } from "../../constants";

export const DocumentViewer: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
        backgroundColor: COLORS.viewerBackground,
        padding: "5px",
        margin: "20px 40px"
      }}
    >
      <iframe
        src={`${import.meta.env.BASE_URL}2025_027.pdf`}
        title="Source Document"
        style={{ width: "100%", height: "95%", border: "none" }}
      />
    </div>
  );
};

