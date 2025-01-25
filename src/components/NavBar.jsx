import React from "react";

function NavBar() {
  const navItemClasses =
    "ml-12 text-nowrap cursor-pointer hover:text-cyan-200 transition duration-150 ease-in-out";
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
          <p className={navItemClasses}>Home</p>
          <p className={navItemClasses}>About</p>
          <p className={navItemClasses}>Projects</p>
          <p className={navItemClasses}>Contact Me</p>
          <button className={buttonClasses}>Hire me!</button>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
