import NotFound from "@/pages/NotFound";
import GioiThieu from "@/pages/GioiThieu";
import SanPham from "@/pages/SanPham";
import PhongHocOMO from "@/pages/PhongHocOMO";
import PhanMemOMO from "@/pages/PhanMemOMO";
import LienHe from "@/pages/LienHe";
import VietinnotechRIS from "@/pages/VietinnotechRIS";
import VietinnotechPatientPortal from "@/pages/VietinnotechPatientPortal";
import VietinnotechPACS from "@/pages/VietinnotechPACS";
import UpdicomEndosoft from "@/pages/UpdicomEndosoft";
import NonDicom from "@/pages/NonDicom";
import Telemedicine from "@/pages/Telemedicine";
import MAMS from "@/pages/MAMS";
import QMS from "@/pages/QMS";
import DichVu from "@/pages/DichVu";
import TichHopHeThong from "@/pages/TichHopHeThong";
import DichVuTrienKhai from "@/pages/DichVuTrienKhai";
import DoiTacLienHe from "@/pages/DoiTacLienHe";
import Layout from "@/components/Layout/Layout";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PhongHocOMO /> },
      { path: "gioi-thieu", element: <GioiThieu /> },
      { path: "san-pham", element: <SanPham /> },
      { path: "san-pham/phong-hoc-omo", element: <PhongHocOMO /> },
      { path: "phan-mem-omo", element: <PhanMemOMO /> },
      { path: "lien-he", element: <LienHe /> },
      { path: "san-pham/telemed-ris", element: <VietinnotechRIS /> },
      { path: "san-pham/telemed-patient-portal", element: <VietinnotechPatientPortal /> },
      { path: "san-pham/telemed-pacs", element: <VietinnotechPACS /> },
      { path: "san-pham/updicom-endosoft", element: <UpdicomEndosoft /> },
      { path: "san-pham/non-dicom", element: <NonDicom /> },
  { path: "san-pham/mams", element: <MAMS /> },
  { path: "san-pham/qms", element: <QMS /> },
      { path: "san-pham/telemedicine", element: <Telemedicine /> },
      { path: "dich-vu", element: <DichVu /> },
      { path: "dich-vu/tich-hop-he-thong", element: <TichHopHeThong /> },
      { path: "dich-vu/trien-khai-tich-hop", element: <DichVuTrienKhai /> },
      { path: "doi-tac-lien-he", element: <DoiTacLienHe /> },
    ],
  },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <Navigate to="404" replace /> },
]);
