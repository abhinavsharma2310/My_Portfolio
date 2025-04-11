import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";

// Animation variant for letter-by-letter text reveal
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roles = ["Web Developer", "Web Designer", "Programmer"];

const Hero = () => {
  // const introText = "I develop modern, user interfaces and web applications";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse lg:flex-row items-center justify-between gap-10`}
      >
        {/* Intro Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abhinav</span>
          </h1>

          {/* Animated Intro Line */}
          {/* <motion.p
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap justify-center lg:justify-start`}
          >
            {introText.split("").map((char, index) => (
              <motion.span key={index} variants={textItem}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p> */}

          {/* Animated Role Switcher */}
          <div className="h-12 mt-4 overflow-hidden text-center lg:text-left text-[28px] sm:text-[32px] font-bold">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentIndex]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-blue-400"
              >
                I am a {roles[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Resume Button */}
          <motion.a
            href="/Abhinav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#915EFF] text-white font-semibold shadow-md hover:bg-[#7c49ff] transition duration-300"
          >
            View Resume
          </motion.a>
        </div>

        {/* Optional: Image Section */}
        {/* <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[28rem] rounded-[50%] border-4 border-[#915EFF] overflow-hidden shadow-xl hover:shadow-[0_0_40px_#915EFF] transition-shadow duration-500"
        >
          <img
            src={My_pimage}
            alt="Abhinav"
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
