import partner1 from "@/assets/partners/partner-1.png";
import partner2 from "@/assets/partners/partner2.png";
import partner3 from "@/assets/partners/partner3.png";
import partner4 from "@/assets/partners/partner4.png";
import partner5 from "@/assets/partners/partner5.png";
import partner6 from "@/assets/partners/partner6.png";
import partner7 from "@/assets/partners/partner7.png";
import partner8 from "@/assets/partners/partner8.png";
import partner9 from "@/assets/partners/partner9.png";
import partner10 from "@/assets/partners/partner10.png";
import partner11 from "@/assets/partners/partner11.png";
import partner12 from "@/assets/partners/partner12.png";
import partner13 from "@/assets/partners/partner13.png";
import "@/components/Partner/Partner.css";
import PartnerCard from "./PartnerCard";

function Partner() {
  return (
    <div className="partner-section" id="Partner">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Đối tác Giáo dục</span>
        </h3>
        <p className="dt-description">Các trường đại học, trường cao đẳng và cơ sở giáo dục hàng đầu tại Việt Nam đã tin tưởng Vietinnotech</p>
      </div>

      <div className="dt-cards-content">
        <div className="dt-cards-wrapper">
          <div className="dt-cards"><a href="https://bvkvcd.com.vn/"><PartnerCard img={partner1}/></a></div>
          <div className="dt-cards"><a href="https://bvxanhpon.vn/"><PartnerCard img={partner2}/></a></div>
          <div className="dt-cards"><a href="https://sannhiquangninh.vn/"><PartnerCard img={partner3}/></a></div>
          <div className="dt-cards"><a href="https://benhvienphoitinhphutho.com.vn/"><PartnerCard img={partner4}/></a></div>
          <div className="dt-cards"><a href="http://phoihanoi.vn/"><PartnerCard img={partner5}/></a></div>
          <div className="dt-cards"><a href="https://soytehaiphong.gov.vn/"><PartnerCard img={partner6}/></a></div>
          <div className="dt-cards"><a href="https://yte.nghean.gov.vn/"><PartnerCard img={partner7}/></a></div>
          <div className="dt-cards"><a href="https://soytequangninh.gov.vn/"><PartnerCard img={partner8}/></a></div>
          <div className="dt-cards"><a href="https://trungtamytethanhthuy.vn/"><PartnerCard img={partner9}/></a></div>
          <div className="dt-cards"><a href="https://www.vinmec.com/vie/"><PartnerCard img={partner10}/></a></div>
          <div className="dt-cards"><a href="https://binhdinhhospital.com.vn/"><PartnerCard img={partner11}/></a></div>
          <div className="dt-cards"><a href="https://www.benhvienkhuvucthuduc.vn/"><PartnerCard img={partner12}/></a></div>
          <div className="dt-cards"><a href="https://benhvienquocoai.com/"><PartnerCard img={partner13}/></a></div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
