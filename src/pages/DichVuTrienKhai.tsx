import React from "react";
// no CTA buttons on pages

const DichVuTrienKhai: React.FC = () => {
  return (
    <main className="page container">
      <h1>Dịch vụ triển khai & tích hợp</h1>
      <p>
        Chúng tôi cung cấp dịch vụ triển khai toàn diện: cấu hình, nâng cấp hạ
        tầng, nghiệm thu và đào tạo sử dụng cho đội ngũ y tế. Cam kết bàn giao
        đúng tiến độ và hỗ trợ kỹ thuật sau triển khai.
      </p>

      <section style={{ marginTop: 16 }}>
        <h3>Quy trình triển khai</h3>
        <ol>
          <li>Khảo sát hiện trạng và thu thập yêu cầu.</li>
          <li>Thiết kế giải pháp và lập kế hoạch dự án.</li>
          <li>Triển khai, kiểm thử và nghiệm thu.</li>
          <li>Đào tạo và chuyển giao vận hành.</li>
        </ol>
      </section>

      {/* CTA removed per request */}
    </main>
  );
};

export default DichVuTrienKhai;
