import { motion } from "framer-motion";

const PageIndicator = ({ currentPage, totalPages, onClick }) => {
  const variants = {
    active: { scale: 1.2 },
    inactive: { scale: 1 },
  };

  return (
    <div className="page-indicators py-[60px] flex justify-center gap-3 w-full">
      {Array.from({ length: totalPages }).map((_, index) => (
        <motion.div
          key={index}
          variants={variants}
          animate={currentPage === index ? "active" : "inactive"}
          className={`rounded-full w-3 h-3 cursor-pointer ${
            currentPage === index ? "bg-red-600" : "bg-light-blue"
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
