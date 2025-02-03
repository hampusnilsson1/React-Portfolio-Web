import React from "react";
import ToolSection from "./ToolSection";
import tools from "../tools.json";

function Tools() {
  return (
    <div className="flex-col items-center">
      {tools.map((tool) => (
        <ToolSection key={tool.id} tool={tool}></ToolSection>
      ))}
    </div>
  );
}

export default Tools;
