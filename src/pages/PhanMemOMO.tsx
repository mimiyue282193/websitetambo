import React from "react";
import "@/pages/PhanMemOMO.css";

const PhanMemOMO: React.FC = () => {
  const features = [
    {
      stt: 1,
      feature: "Tổ chức buổi học OMO: giáo viên lên lịch, tạo phòng học trực tuyến, hệ thống trả link tham gia và hiển thị trên lịch của lớp"
    },
    {
      stt: 2,
      feature: "Tham gia buổi học: học viên bấm \"Tham gia ngay\" từ trang khóa học hoặc mục Lịch"
    },
    {
      stt: 3,
      feature: "Lịch & nhắc việc hợp nhất: xem thời khóa biểu online/offline, hạn nộp bài; nhắc tự động trước giờ học; đồng bộ Google Calendar/Outlook"
    },
    {
      stt: 4,
      feature: "Ghi hình tự động: buổi học được ghi lại để dễ xem lại mục Nội dung/Tài liệu học tập"
    },
    {
      stt: 5,
      feature: "Chế độ ghi: Server-side recording (SSR) tại SFU/MCU; ghi file MP4 (container ISO BMFF), có metadata lớp/GV/ngày độ dài"
    },
    {
      stt: 6,
      feature: "Mã hóa video/audio: H.264 (High Profile, Level 4.1) + Opus 48 kHz; bitrate ~3 Mbps; mác định 1080p30; độ bộ A/V < 100 ms."
    },
    {
      stt: 7,
      feature: "Nén & lưu trữ: Post-processing FFmpeg (2-pass khi cần); tạo rung HLS (1080p/720p/480p); lưu S3-compatible; lifecycle policy chuyển cold storage sau N ngày."
    },
    {
      stt: 8,
      feature: "Bảo mật & quyền truy cập: Pre-signed 28L; AES-128 HLS; watermark overlay theo người xem (UUID+timestamp)."
    },
    {
      stt: 9,
      feature: "Tự động đẩy nội dung: Webhook recording.completed --> tạo mục trong Nội dung/Tài liệu học tập, gán metadata lớp/GV/ngày độ dài."
    },
    {
      stt: 10,
      feature: "Lộ trình học tập kết hợp: thiết kế chuỗi học (bài giảng → bài tập → kiểm tra), đánh dấu hoàn thành và điều kiện mở bài tiếp theo"
    },
    {
      stt: 11,
      feature: "Công nghệ đánh dấu hoàn thành: xAPI statement store (completed/passed/failed; result.score), động bộ vLMS core; SCORM runtime API (cmi.core.lesson_status, cmi.core.score.raw)."
    },
    {
      stt: 12,
      feature: "Engine điều kiện: Rule-based; cron định kỳ + event-driven (webhook khi submit grade)."
    },
    {
      stt: 13,
      feature: "Lưu trữ tài liệu dạng: video, PDF/slide, link; nội dung tương tác HSP; xử hướng danh sách khóa học"
    },
    {
      stt: 14,
      feature: "Giao tiếp cá kênh: diễn đàn theo chủ đề (không động bộ), chat thời gian thực trong lớp, nhân tin nội bộ GV-HV"
    },
    {
      stt: 15,
      feature: "Họp trực tuyến tích hợp: Zoom, Teams, Jitsi, Google Meet; hỗ trợ thảo luận nhóm/project-based learning; GV duyệt vào lớp"
    },
    {
      stt: 16,
      feature: "Quản lý lộp & tham gia bằng mã: tạo/lộc danh sách lớp, học viên tham gia bằng mã lớp hiển thị hoạt động + Tạo/lộc danh sách lớp; CRUD lộp, nhập khẩu CSV/XLSX, lộc theo ngành/học kỳ, phân công GV chính/phụ + Duyệt vào lộp: Hàng dọi duyệt, log thời gian - người duyệt; email/push thông báo kết quả. Theo dõi tiến độ & cảnh báo: từ đánh dấu hoàn thành, cảnh báo nếu chưa làm bài học quá + Định danh & phân quyền: đăng kỳ/đăng nhập SSO, OAuth, LDAP; vai trò học viên/giảng viên/quản trị/phụ huynh; động bộ từ liệu nhân sự"
    },
    {
      stt: 17,
      feature: "+ SSO/Directory: OpenID Connect, SAML 2.0, LDAP/AD; vai trò – nhóm. + Vai trò & quyền: Học viên, Giảng viên, Quản trị, Phụ huynh (read-only); RBAC theo resource-action; policy-as-code (OPA). + Chữ ký số/ghi nhận: Audit log bất biến (append-only, SHA-256 chain), lưu ≥365 ngày; xuất JSON/CSV."
    }
  ];

  return (
    <main className="phan-mem-omo-page">
      <div className="phan-mem-container">
        {/* Header Section */}
        <div className="pmo-header">
          <h1>Phần Mềm Giải Pháp OMO</h1>
          <p className="pmo-subtitle">
            Nền tảng học tập kết hợp Online và Offline với đầy đủ công cụ quản lý, ghi hình, 
            và theo dõi tiến độ học tập
          </p>
        </div>

        {/* Introduction Section */}
        <section className="pmo-intro">
          <div className="intro-content">
            <h2>Giới Thiệu</h2>
            <p>
              Phần mềm OMO (Online & Offline) là giải pháp giáo dục toàn diện được thiết kế đặc biệt 
              cho các trường đại học, cao đẳng và cơ sở giáo dục. Nó cung cấp các tính năng quản lý 
              lớp học, tổ chức buổi học trực tuyến, ghi hình tự động, quản lý tài liệu, và theo dõi 
              tiến độ học tập của học viên một cách toàn diện.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="pmo-features">
          <h2>Danh Sách Tính Năng</h2>
          <div className="features-table-wrapper">
            <table className="features-table">
              <thead>
                <tr>
                  <th className="col-stt">STT</th>
                  <th className="col-feature">TÍNH NĂNG</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item) => (
                  <tr key={item.stt}>
                    <td className="col-stt">{item.stt}</td>
                    <td className="col-feature">{item.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Download Section */}
        <section className="pmo-download">
          <h2>Tải Tài Liệu</h2>
          <div className="download-card">
            <div className="download-icon">📄</div>
            <div className="download-info">
              <h3>Tài Liệu Chi Tiết Phần Mềm OMO</h3>
              <p>Tải file PDF chứa toàn bộ thông tin chi tiết về các tính năng, cấu hình và hướng dẫn sử dụng</p>
            </div>
            <a href="/catalog/DocOMO.pdf" download className="download-btn">
              ⬇️ Tải PDF
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhanMemOMO;
