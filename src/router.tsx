import NotFound from "@/pages/NotFound";
import SanPham from "@/pages/SanPham";
import PhongHocOMO from "@/pages/PhongHocOMO";
import PhanMemOMO from "@/pages/PhanMemOMO";
import LienHe from "@/pages/LienHe";
import Layout from "@/components/Layout/Layout";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PhongHocOMO /> },
      { path: "san-pham", element: <SanPham /> },
      { path: "san-pham/phong-hoc-omo", element: <PhongHocOMO /> },
      { path: "phan-mem-omo", element: <PhanMemOMO /> },
      { path: "lien-he", element: <LienHe /> },
    ],
  },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <Navigate to="404" replace /> },
]);
