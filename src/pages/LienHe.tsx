import React, { useState } from "react";
import "@/pages/LienHe.css";

const LienHe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="lien-he-page">
      <div className="lien-he-container">
        <div className="lien-he-header">
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <p>Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất</p>
        </div>

        <div className="lien-he-content">
          {/* Contact Info */}
          <div className="lien-he-info">
            <div className="info-box">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Địa Chỉ</h3>
                <p>Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Điện Thoại</h3>
                <p>
                  <a href="tel:0906247699">0906 247 699</a>
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">🕐</div>
              <div className="info-details">
                <h3>Giờ Làm Việc</h3>
                <p>Thứ 2 - Thứ 6: 08:30 - 17:30</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="lien-he-form" onSubmit={handleSubmit}>
            <h2>Gửi Tin Nhắn</h2>

            <div className="form-group">
              <label htmlFor="name">Họ Tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Điện Thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Tiêu Đề *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Chủ đề liên hệ"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nội Dung *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Nhập tin nhắn của bạn..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LienHe;
