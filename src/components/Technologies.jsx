import React from "react";

import Tools from "./Tools";
import Stats from "./Stats";

function Technologies() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-12 mx-48 pb-16">
      <div className="flex-col justify-center w-full lg:w-1/2 mb-16 lg:mb-0 ">
        <h1 className="text-center text-nowrap text-green-400 text-4xl font-bold lg:text-3xl">
          Overall Knowledge
        </h1>
        <Stats />
      </div>
      <div className="flex-col justify-center w-full lg:w-1/2">
        <h1 className="text-center text-green-400 text-4xl font-bold lg:text-3xl">
          Tools
        </h1>
        <Tools />
      </div>
    </section>
  );
}

export default Technologies;
