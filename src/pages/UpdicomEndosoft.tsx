import React from "react";
const UpdicomEndosoft: React.FC = () => {
  return (
    <main className="page container">
      <h1>Updicom / Endosoft — Tích hợp dữ liệu hình ảnh</h1>
      <p>
        Dịch vụ tích hợp chuyên sâu giữa hệ thống DICOM và các nền tảng quản lý
        thông tin (Endosoft). Giúp đồng bộ dữ liệu, giảm thao tác thủ công và
        đảm bảo tính nhất quán của hồ sơ bệnh nhân.
      </p>

      <section style={{ marginTop: 16 }}>
        <h3>Dịch vụ cung cấp</h3>
        <ul>
          <li>Kết nối và chuyển đổi dữ liệu giữa Updicom và Endosoft.</li>
          <li>Thiết lập luồng dữ liệu tự động cho quy trình chẩn đoán.</li>
          <li>Kiểm thử tích hợp và hướng dẫn vận hành cho đội ngũ y tế.</li>
        </ul>
      </section>

      {/* CTA removed per request */}
    </main>
  );
};

export default UpdicomEndosoft;
