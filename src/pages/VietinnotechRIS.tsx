import React from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";


const VietinnotechRIS: React.FC = () => {
    return (
        <main className="page" style={{ width: "100%" }}>
            <div style={{ margin: '12px auto 0', width: '85%' }}>
                <PDFViewer src="/catalog/Catalogue_RIS.pdf" />
            </div>
        </main>
    );
};

export default VietinnotechRIS;
// Vietinnotech RIS page updated with marketing content

 