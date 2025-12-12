import React from "react";
// no CTA buttons on pages

const TichHopHeThong: React.FC = () => {
  return (
    <main className="page container">
      <h1>Tích hợp hệ thống</h1>
      <p>
        Dịch vụ tích hợp hệ thống đảm bảo các thành phần phần mềm và thiết bị y
        tế hoạt động liền mạch. Chúng tôi xây dựng các connector, API và
        workflow để đồng bộ dữ liệu bệnh nhân.
      </p>

      <section style={{ marginTop: 16 }}>
        <h3>Phạm vi</h3>
        <ul>
          <li>Kết nối HIS/EMR, LIS, PACS và các thiết bị chẩn đoán.</li>
          <li>Thiết kế luồng công việc phù hợp với quy trình bệnh viện.</li>
          <li>Kiểm thử tích hợp, chuyển dữ liệu và chạy song song khi cần.</li>
        </ul>
      </section>

      {/* CTA removed per request */}
    </main>
  );
};

export default TichHopHeThong;
