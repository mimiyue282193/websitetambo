import React from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";
import Partner from "@/components/Partner/Partner";


const DoiTacLienHe: React.FC = () => {
    return (
        <main className="page" style={{ width: "100%" }}>
            <div style={{ margin: '12px auto 0', width: '85%' }}>
                <PDFViewer src="/catalog/Catalogue_CONTACT.pdf" />
            </div>
            <Partner />
        </main>
    );
};

export default DoiTacLienHe;
