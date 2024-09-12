import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { about } from "../data";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import pro from "../assets/pro.jpeg";

const About = () => {
    return (
      <div className="sm:my-20">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionText} text-center`}>About Me</h2>
        </motion.div>
  
        <div className="flex flex-col items-center justify-center mt-5 md:mt-5 md:p-1">
        <img
          src={pro}
          alt="Professional Picture"
          className="w-60 h-auto rounded-full shadow-md mb-1"
        />
        </div>
        <div className="relative mt-5 md:mt-1 md:p-10 flex justify-center">
            <div className="max-w-4xl w-full border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 bg-transparent shadow-lg">
                {about.info.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-slate-300 font-semibold text-[16px] xs:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: paragraph }} // Use dangerouslySetInnerHTML here
                    />
                ))}
            </div>
        </div>
      </div>
    );
  };
export default SectionWrapper(About, "About");