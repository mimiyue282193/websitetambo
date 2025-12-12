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
      feature: "Tham gia 1 chạm: học viên bấm \"Tham gia ngay\" từ trang khóa học hoặc mục Lịch"
    },
    {
      stt: 3,
      feature: "Lịch & nhắc việc hợp nhất: xem thời khóa biểu online/offline, hạn nộp bài; nhắc tự động trước giờ học; đồng bộ Google Calendar/Outlook"
    },
    {
      stt: 4,
      feature: "Ghi hình tự động: buổi học được ghi lại để đẩy vào mục Nội dung/Tài liệu học tập"
    },
    {
      stt: 5,
      feature: "Chế độ ghi: Server-side recording (SSR) tại SFU/MCU; ghi file MP4 (container ISO BMFF)."
    },
    {
      stt: 6,
      feature: "Mã hóa video/audio: H.264 (High Profile, Level 4.1) + Opus 48 kHz; bitrate 1.5–4.5 Mbps; mặc định 1080p30; đồng bộ A/V < 100 ms."
    },
    {
      stt: 7,
      feature: "Nén & lưu trữ: Post-processing FFmpeg (2-pass khi cần); tạo rung HLS (1080p/720p/480p); lưu S3-compatible; lifecycle policy chuyển cold storage sau N ngày."
    },
    {
      stt: 8,
      feature: "Bảo mật & quyền truy cập: Pre-signed URL; AES-128 HLS; watermark overlay theo người xem (UserID-timestamp)."
    },
    {
      stt: 9,
      feature: "Tự động đẩy nội dung: Webhook recording.completed --> tạo mục trong Nội dung/Tài liệu học tập, gắn metadata lớp/GV/ngày/độ dài."
    },
    {
      stt: 10,
      feature: "Lộ trình học tập kết hợp: thiết kế chuỗi học (bài giảng → bài tập → kiểm tra), đánh dấu hoàn thành và điều kiện mở bài tiếp theo"
    },
    {
      stt: 11,
      feature: "Công nghệ đánh dấu hoàn thành: xAPI statement store (completed/passed/failed; result.score), đồng bộ về LMS core; SCORM runtime API (cmi.core.lesson_status, cmi.core.score.raw)."
    },
    {
      stt: 12,
      feature: "Engine điều kiện: Rule-based; cron định kỳ + event-driven (webhook khi submit/grade)."
    },
    {
      stt: 13,
      feature: "Học liệu đa định dạng: video, PDF/slide, link, nội dung tương tác H5P, gói SCORM/xAPI; kéo-thả sắp xếp; học viên truy cập trực tiếp từ khóa học"
    },
    {
      stt: 14,
      feature: "Giao tiếp đa kênh: diễn đàn theo chủ đề (không đồng bộ), chat thời gian thực trong lớp, nhắn tin nội bộ GV–HV"
    },
    {
      stt: 15,
      feature: "Họp trực tuyến tích hợp: Zoom, Teams, Jitsi, Google Meet; hỗ trợ thảo luận nhóm/project-based learning"
    },
    {
      stt: 16,
      feature: "Quản lý lớp & tham gia bằng mã: tạo/lọc danh sách lớp, học viên tham gia bằng mã lớp hoặc link mời; GV duyệt vào lớp\n+ Tạo/lọc danh sách lớp: CRUD lớp; nhập khẩu CSV/XLSX; lọc theo ngành/học kỳ; phân công GV chính/phụ.\n+ Tham gia bằng mã: Mã lớp 6–10 ký tự (Base32, tránh O/0/I/1); hoặc link mời có invite_token (JWT exp ≤ 7 ngày).\n+ Duyệt vào lớp: Hàng đợi duyệt; log thời gian – người duyệt; email/push thông báo kết quả.\nTheo dõi tiến độ & cảnh báo: tự động đánh dấu hoàn thành, cảnh báo nếu chưa làm bài hoặc quá hạn"
    },
    {
      stt: 17,
      feature: "Theo dõi tiến độ & cảnh báo: tự động đánh dấu hoàn thành, cảnh báo nếu chưa làm bài hoặc quá hạn"
    },
    {
      stt: 18,
      feature: "Định danh & phân quyền: đăng ký/đăng nhập SSO, OAuth, LDAP; vai trò học viên/giảng viên/quản trị/phụ huynh; đồng bộ dữ liệu nhân sự\n+ SSO/Directory: OpenID Connect, SAML 2.0, LDAP/AD; SCIM 2.0 để đồng bộ người dùng – vai trò – nhóm.\n+ Vai trò & quyền: Học viên, Giảng viên, Quản trị, Phụ huynh (read-only); RBAC theo resource-action; policy-as-code (OPA).\n+ Chữ ký số/ghi nhận: Audit log bất biến (append-only, SHA-256 chain); lưu ≥365 ngày; xuất JSON/CSV."
    }
  ];

  return (
    <main className="phan-mem-omo-page">
      <div className="phan-mem-container">
        {/* Header Section */}
        <div className="pmo-header">
          <h1>Phần Mềm Giải Pháp OMO</h1>
          <p className="pmo-subtitle">
            Model: VIT_OMO_v2 - Nền tảng học tập kết hợp Online và Offline
          </p>
          <p className="pmo-subtitle-2">
            Với 18 tính năng toàn diện: quản lý lớp, ghi hình, tài liệu, giao tiếp, xác thực & phân quyền
          </p>
        </div>

        {/* Introduction Section */}
        <div className="overview-content">
          <h2>Giới Thiệu Phần Mềm OMO</h2>
          <p>
            Phần mềm OMO (Online & Offline) là giải pháp giáo dục toàn diện được thiết kế đặc biệt
            cho các trường đại học, cao đẳng và cơ sở giáo dục. Nó cung cấp các tính năng quản lý
            lớp học, tổ chức buổi học trực tuyến, ghi hình tự động, quản lý tài liệu, và theo dõi
            tiến độ học tập của học viên một cách toàn diện.
          </p>
        </div>

        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">🎓</div>
            <h3>Quản Lý Giáo Dục Toàn Diện</h3>
            <p>Hỗ trợ các phương pháp học tập hybrid, kết hợp giữa online và offline</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🔒</div>
            <h3>Bảo Mật & Phân Quyền</h3>
            <p>Hệ thống xác thực SSO/LDAP/OAuth với RBAC theo resource-action</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📹</div>
            <h3>Ghi Hình Chuyên Nghiệp</h3>
            <p>H.264 + Opus 48kHz, HLS adaptive streaming, AES-128 encryption</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">📊</div>
            <h3>Theo Dõi Tiến Độ</h3>
            <p>xAPI & SCORM API, audit log bất biến, báo cáo chi tiết</p>
          </div>
        </div>

        {/* Features List Section */}
        <section className="pmo-features">
          <br />
          <h2>Danh Sách Tính Năng</h2>
            <div className="features-table-wrapper">
              <table className="features-table">
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
      </div>
    </main>
  );
};

export default PhanMemOMO;
