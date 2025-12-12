import React from "react";
import PDFViewer from "../components/PDFViewer/PDFViewer";

const PhongHocOMO: React.FC = () => {
  return (
    <main className="page" style={{ width: "100%" }}>
      <div style={{ margin: '12px auto 0', width: '85%' }}>
        <p style={{ textAlign: 'center', marginBottom: '32px', fontSize: '20px', color: '#666' }}>
          Giải pháp học tập kết hợp Online và Offline (OMO) dành cho các trường đại học, trường cao đẳng và cơ sở giáo dục.
          Cung cấp nền tảng tích hợp để quản lý lớp học, bài giảng, và tương tác học tập giữa giáo viên và học sinh.
        </p>
        <PDFViewer src="/catalog/Catalogue_PhongHocOMO.pdf" />
      </div>
    </main>
  );
};

export default PhongHocOMO;
