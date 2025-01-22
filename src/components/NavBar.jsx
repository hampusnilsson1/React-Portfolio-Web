import React from "react";

function NavBar() {
  const navItemClasses =
    "ml-12 cursor-pointer hover:text-cyan-200 transition duration-150 ease-in-out";
  const buttonClasses =
    "h-14 px-8 text-black bg-green-300 rounded-3xl ml-12 hover:bg-emerald-300 transition duration-150 ease-in-out";

  return (
    <section className="mx-56 p-3 flex justify-between items-center">
      <div>
        <p className="cursor-default text-xl">Hampus</p>
      </div>
      <div className="flex items-center">
        <p className={navItemClasses}>Home</p>
        <p className={navItemClasses}>About</p>
        <p className={navItemClasses}>Projects</p>
        <p className={navItemClasses}>Contact Me</p>
        <button className={buttonClasses}>Hire me!</button>
      </div>
    </section>
  );
}

export default NavBar;
