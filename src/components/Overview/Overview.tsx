import "@/components/Overview/Overview.css";
import InformationCard from "./InformationCard";
import about1 from "@/assets/about/1-removebg-preview.png"
import about2 from "@/assets/about/1-removebg-preview.png"
import about3 from "@/assets/about/1-removebg-preview.png"
import about4 from "@/assets/about/1-removebg-preview.png"

function Overview() {
  return (
    <div className="info-section" id="Overview">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Tổng quan</span>
        </h3>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="SỨ MỆNH CỘNG ĐỒNG"
          description={
            "Là một trong những công ty tiên phong trong ứng dụng CNTT vào ngành Giáo dục tại Việt Nam. Vietinnotech có sứ mệnh giúp học sinh, sinh viên và giáo viên tiếp cận công nghệ giáo dục tiên tiến, nâng cao chất lượng học tập."
          }
          icon={about1}
        />

        <InformationCard
          title="ĐÓN ĐẦU CÔNG NGHỆ"
          description={
            "Với đội ngũ nhân lực giàu kinh nghiệm, Vietinnotech nghiên cứu và phát triển các sản phẩm phù hợp với xu hướng chuyển đổi số trong giáo dục trong nước và quốc tế."
          }
          icon={about2}
        />

        <InformationCard
          title="ĐỐI TÁC TIN CẬY"
          description={
            "Đồng hành cùng sự phát triển và thành công của các trường đại học và cơ sở giáo dục. Vietinnotech cam kết cung cấp phần mềm giáo dục chất lượng cao, chi phí hợp lý và dịch vụ hỗ trợ tận tâm."
          }
          icon={about3}
        />
        <InformationCard
          title="VƯƠN TẦM QUỐC TẾ"
          description={
            "Sản phẩm Vietinnotech tuân thủ các tiêu chuẩn quốc tế về công nghệ giáo dục. Chúng tôi đang mở rộng thị trường quốc tế và mang giá trị công nghệ Việt Nam ra toàn cầu."
          }
          icon={about4}
        />
      </div>
    </div>
  );
}

export default Overview;
