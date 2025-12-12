import React from "react";
import { Link } from "react-router-dom";

const SanPham: React.FC = () => {
  const cards = [
    { title: "Giải pháp OMO", path: "/san-pham/phong-hoc-omo", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=60&auto=format&fit=crop" },
  ];

  return (
    <main className="page container">
      <header>
        <h1>Giải pháp OMO</h1>
        <p>
          Phòng học tích hợp Online và Offline - Giải pháp công nghệ giáo dục tiên tiến
          được thiết kế cho trường đại học, trường cao đẳng và các cơ sở giáo dục.
        </p>
      </header>

      <section className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
        {cards.map((c) => (
          <article key={c.title} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <img src={c.img} alt={c.title} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 6 }} />
            <h3 style={{ marginTop: 12 }}>{c.title}</h3>
            <p>Giải pháp chuyên biệt cho {c.title} — tối ưu quy trình, tiết kiệm thời gian.</p>
            <p>
              <Link to={c.path} className="navbar-links">Tìm hiểu</Link>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default SanPham;
