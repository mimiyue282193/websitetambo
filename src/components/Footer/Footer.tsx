import "@/components/Footer/Footer.css";
import logo from "assets/logo.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="ft-left">
          <div className="ft-col">
            <p className="ft-list-title">LIÊN HỆ</p>
            <ul className="ft-list-items simple">
              <li>
                <a href="#">Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</a>
              </li>
              <li>
                <a href="tel:0906247699">0906247699</a>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <p className="ft-list-title">THỜI GIAN LÀM VIỆC</p>
            <ul className="ft-list-items simple">
              <li>Thứ 2 - Thứ 6</li>
              <li>08:30 - 17:30</li>
            </ul>
          </div>
        </div>

        <div className="ft-center">
          <p className="ft-list-title">THEO DÕI</p>
          <ul className="ft-social-links">
            <li>
              <a href="https://www.facebook.com/Vietinnotech" title="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="ft-right">
          <img src={logo} alt="Vietinnotech" className="ft-logo" />
          <p className="ft-slogan">Vietinnotech — Giải pháp giáo dục số toàn diện</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Vietinnotech. All rights reserved.</div>
        <div>Designed &amp; supported by Vietinnotech</div>
      </div>
    </footer>
  );
}

export default Footer;
