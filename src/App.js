import UserInfo from "./pages/userInfo/UserInfo";
import UserReg from "./pages/userReg/UserReg";
import Doctors from "./components/doctors/Doctors";
import NotFound from "./components/user/notFound/NotFound.jsx";
import MainBlock from "./components/main/MainBlock";
import OurDoc from "./components/ourDoc/OurDoc";
import Clinic from "./components/try/aboutOurClinic/Clinic";
import LayoutFooter from "./components/layoutFooter/LayoutFooter";
import HeaderNav from "./components/header/HeaderNav";
import "./global.css";
import { Routes, Route } from "react-router-dom";
import Bundle from "./components/Bundle";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Bundle />} />
        <Route path="/main_block" element={<MainBlock />} />
        <Route path="/user_reg" element={<UserReg />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/info" element={<UserInfo />} />
        <Route path="/our_doc" element={<OurDoc />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
