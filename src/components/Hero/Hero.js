import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Rathika
        </SectionTitle>
        <SectionText>
        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
        </SectionText>
        {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,margin: "0 0 80px" }}>
          <Button alt="upwork" onClick={handleClickUpwork}>
            Upwork
          </Button>
          <Button alt="fiverr" onClick={handleClickFiverr}>
            Fiverr
          </Button>
          <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button>
        </div> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
