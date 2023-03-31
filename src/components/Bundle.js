import Doctors from "./doctors/Doctors";
import MainBlock from "./main/MainBlock";
import OurDoc from "./ourDoc/OurDoc";
import Clinic from "./try/aboutOurClinic/Clinic";
import Layout from "../layout/Layout";
import LayoutFooter from "./layoutFooter/LayoutFooter";

const Bundle = () => {
  return (
    <div>
      <Layout>
        <MainBlock />
        <OurDoc />
        <Clinic />
        <Doctors />
        <LayoutFooter />
      </Layout>
    </div>
  );
};

export default Bundle;
