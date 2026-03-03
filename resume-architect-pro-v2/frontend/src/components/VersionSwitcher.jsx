
import React from "react";

function VersionSwitcher({ onChange }) {
  return (
    <div className="switcher no-print">
      <button onClick={() => onChange("architect")}>架构版</button>
      <button onClick={() => onChange("tech")}>技术专家版</button>
      <button onClick={() => onChange("business")}>业务版</button>
      <button onClick={() => onChange("balanced")}>综合版</button>
    </div>
  );
}

export default VersionSwitcher;
