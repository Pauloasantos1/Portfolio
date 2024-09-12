import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { educations } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {education.degree}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {education.school} | {education.time}
      </p>
    </div>
  );
};

const Education = () => {
  const [selectedEd, setSelectedEd] = useState(educations[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Education
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start sm:justify-center">
        <div className="flex flex-col z-10 sm:w-auto w-full sm:text-left text-center">
          {educations.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              onClick={() => setSelectedEd(education)}
              isActive={selectedEd === education}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "portfolio");
