import React, { useState } from "react";
import Burger from "../components/Burger/Burger";
import Form from "../components/Form/Form";
import FormSucces from "../components/Form/FormSucces";
import Modal from "../components/Modal/Modal";
import AboutSection from "../sections/AboutSection/AboutSection";
import ApplicationSectioan from "../sections/ApplicationSectioan/ApplicationSectioan";
import Footer from "../sections/Footer/Footer";
import HeroSection from "../sections/HeroSection/HeroSection";
import PartnerSection from "../sections/PartnerSection/PartnerSection";
import PortfolioSection from "../sections/PortfolioSection/PortfolioSection";
import ProcessSection from "../sections/ProcessSection/ProcessSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import TeamSection from "../sections/TeamSection/TeamSection";

const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [formActive, setformActive] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <Burger />
      <main>
        <HeroSection setActive={setModalActive} />
        <AboutSection setActive={setModalActive} />
        <ServicesSection setActive={setModalActive} />
        <PortfolioSection />
        <TeamSection />
        <ProcessSection setActive={setModalActive} />
        <PartnerSection />
        <ApplicationSectioan
          setActive={setModalActive}
          setSuccessActive={setSuccess}
          successActive={success}
        />
        <Footer />
        <Modal active={modalActive} setActive={setModalActive}>
          <Form
            activeForm={formActive}
            setActiveForm={setformActive}
            setActive={setModalActive}
            setSuccessActive={setSuccess}
            setSuccessPopup={setSuccess}
          />
        </Modal>
        <FormSucces setSuccessActive={setSuccess} successActive={success} />
      </main>
    </div>
  );
};

export default MainPage;
