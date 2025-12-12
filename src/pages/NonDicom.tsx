import React from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";

// no CTA buttons on pages

const NonDicom: React.FC = () => {
    return (
        <main className="page" style={{ width: "100%" }}>
            <div style={{ margin: '12px auto 0', width: '85%' }}>
                <PDFViewer src="/catalog/Catalogue_Nondicom.pdf" />
            </div>
        </main>
    );
};

export default NonDicom;
