import React from "react";
import { motion } from "motion/react";

function ToolSection({ tool }) {
  const sources = tool.sources;
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 40 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <div className="mb-10">
        <div className="text-center text-green-400 text-[20px]">
          {tool.name}
        </div>
        <div className="flex justify-center gap-5">
          {sources.map((link) => (
            <img src={link} alt="" width={45} height={45} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ToolSection;
