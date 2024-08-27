import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { about } from "../data";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const About = () => {
    return (
      <div className="sm:my-20">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>About Me</h2>
        </motion.div>
  
        <div className="relative mt-10 md:mt-20 md:p-20 flex justify-center">
          <div className="max-w-4xl w-full border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 bg-transparent shadow-lg">
            <p className="text-slate-300 font-semibold text-[16px] xs:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
              {about.info}
            </p>
          </div>
        </div>
      </div>
    );
  };
export default SectionWrapper(About, "About");