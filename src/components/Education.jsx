import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "linear-gradient(135deg, #1d1836, #243c5a)", // Gradient background
          color: "#fff",
          boxShadow: "0px 4px 15px rgba(50, 55, 58, 0.4)", // Blue shadow effect
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        contentArrowStyle={{ borderRight: "8px solid  #232631" }}
        date={educationItem.date}
        iconStyle={{
          background: educationItem.iconBg,
          boxShadow: "0px 0px 10px rgba(109, 139, 155, 0.8)", // Glowing blue effect on icon
        }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={educationItem.icon}
              alt={educationItem.institution}
 className='w-[90%] h-[90%] object-contain object-cover rounded-full '
            />
          </div>
        }
      >
        <div className="education-card hover:scale-[1.03] transition-transform duration-300 ease-in-out">
          <h3 className="text-white text-[24px] font-bold">{educationItem.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {educationItem.institution}
          </p>
        </div>
  
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {educationItem.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Academic Journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((educationItem, index) => (
            <EducationCard key={`education-${index}`} educationItem={educationItem} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
