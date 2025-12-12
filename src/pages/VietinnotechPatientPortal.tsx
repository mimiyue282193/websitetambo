import React from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";

// Embed the brochure (public/catalog) and provide prose based on the brochure content.
const VietinnotechPatientPortal: React.FC = () => {
    return (
        <main className="page" style={{ width: "100%" }}>
            <div style={{ margin: '12px auto 0', width: '85%' }}>
                <PDFViewer src="/catalog/Catalogue_Patient_Portal.pdf" />
            </div>
        </main>
    );
};

export default VietinnotechPatientPortal;
