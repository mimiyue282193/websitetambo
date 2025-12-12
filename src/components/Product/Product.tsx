import "@/components/Product/Product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="about-section" id="Product">
      <div className="about-text-content">
        <h3 className="about-title">
          <span>Giải pháp chính</span>
        </h3>
        <p className="about-description">Giải pháp phần mềm giáo dục tiên tiến của Vietinnotech.</p>

        <ul className="product-list">
          <li>
            <Link to="/san-pham/phong-hoc-omo" className="about-text-step">
              Giải pháp OMO - Phòng học tích hợp Online và Offline
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
