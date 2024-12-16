import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Anasayfa from "./pages/anasayfa/Anasayfa.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FooterTop from "./components/FooterTop/FooterTop.jsx";
import Projeler from "./pages/projeler/Projeler.jsx";
import ProjeDetay from "./pages/projeDetaySayfası/ProjeDetay.jsx";
import Iletisim from "./pages/iletisim/Iletisim.jsx";
import Hakkimizda from "./pages/Hakkımizda/Hakkimizda.jsx";
import AdminDashboard from "./pages/adminPanel/AdminDashboard.jsx";
import AdminProjeEkle from "./pages/adminPanel/AdminProjeEkle.jsx";
import AdminProjeSil from "./pages/adminPanel/AdminProjeSil.jsx";
import AdminProjeDuzenle from "./pages/adminPanel/AdminProjeDuzenle.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/projeler/:id" element={<ProjeDetay/>} />
        <Route path="/iletisim" element={<Iletisim/>} />
        <Route path="/hakkimizda" element={<Hakkimizda/>} />

        <Route path="/admin" element={<AdminDashboard/>}> 
        <Route path="ekle" element={<AdminProjeEkle/>} />
        <Route path="sil" element={<AdminProjeSil/>} />
        <Route path="duzenle" element={<AdminProjeDuzenle/>} />
        
        </Route>
      </Routes>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
