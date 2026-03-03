
import React, { useState } from "react";
import ResumeRenderer from "./components/ResumeRenderer";
import VersionSwitcher from "./components/VersionSwitcher";
import "./styles/base.css";

import architect from "./data/architect.json";
import tech from "./data/tech-expert.json";
import business from "./data/business.json";
import balanced from "./data/balanced.json";

const versions = { architect, tech, business, balanced };

function App() {
  const [current, setCurrent] = useState("balanced");

  return (
    <div>
      <VersionSwitcher onChange={setCurrent} />
      <ResumeRenderer data={versions[current]} />
    </div>
  );
}

export default App;
