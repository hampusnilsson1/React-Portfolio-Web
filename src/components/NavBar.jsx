import React from "react";
import { motion } from "motion/react";

function NavBar() {
  const navItemClasses =
    "ml-12 text-nowrap cursor-pointer hover:text-cyan-300 transition duration-150 ease-in-out";
  const buttonClasses =
    "h-14 px-8 text-black text-nowrap bg-green-300 rounded-3xl ml-12 hover:bg-emerald-300 transition duration-150 ease-in-out";

  return (
    <section className="w-full">
      <nav className="px-16 lg:px-56 p-3 flex justify-between items-center border-b-2 border-white border-opacity-10 bg-white/[0.1] w-full">
        <div>
          <p className="cursor-default text-xl font-semibold ">Hampus</p>
          <p className="cursor-default text-xl font-semibold ml-6">Nilsson</p>
        </div>
        <div className="flex items-center">
          <motion.p
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className={navItemClasses}
          >
            Home
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className={navItemClasses}
          >
            About
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className={navItemClasses}
          >
            Projects
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className={navItemClasses}
          >
            Contact Me
          </motion.p>
          <button className={buttonClasses}>Hire me!</button>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
