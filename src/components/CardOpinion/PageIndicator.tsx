import { motion } from "framer-motion";
import { useState } from "react";

const PageIndicator = ({ activeIndex, totalSlides }) => {
  const variants = {
    active: { scale: 1.2 },
    inactive: { scale: 1 },
  };
  const [current, setCurrent] = useState(0);

  // const previousSlide = () => {
  //   if (current === 0) setCurrent(slides.length - 1);
  //   else setCurrent(current - 1);
  // };

  // const nextSlide = () => {
  //   if (current === slides.length - 1) setCurrent(0);
  //   else setCurrent(current + 1);
  // };

  return (
    <div className="page-indicators absolute py-[60px] flex justify-center gap-3 w-full">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.div
          key={index}
          variants={variants}
          animate={index === activeIndex ? "active" : "inactive"}
          // className="indicator "
          className={`rounded-full w-3 h-3 cursor-pointer  ${
            index === current ? "bg-dark-blue" : "bg-light-blue"
          }`}
        />
      ))}
    </div>
  );
};
export default PageIndicator;
