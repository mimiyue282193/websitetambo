import React from "react";
import { Link } from "react-router-dom";

const DichVu: React.FC = () => {
  return (
    <main className="page container">
      <header>
        <h1>Dịch vụ triển khai và tích hợp</h1>
        <p>
          Chúng tôi cung cấp giải pháp toàn diện: tư vấn, triển khai hệ thống,
          tích hợp với HIS/PACS và đào tạo vận hành để đảm bảo chuyển đổi số
          suôn sẻ cho bệnh viện.
        </p>
      </header>

      <section style={{ marginTop: 20 }}>
        <h3>Dịch vụ nổi bật</h3>
        <ul>
          <li>
            <Link to="/dich-vu/tich-hop-he-thong">Tích hợp hệ thống</Link> —
            kết nối HIS, EMR, PACS và các thiết bị lâm sàng.
          </li>
          <li>
            <Link to="/dich-vu/trien-khai-tich-hop">Dịch vụ triển khai, tích hợp</Link> —
            tư vấn, triển khai và đào tạo vận hành.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default DichVu;
