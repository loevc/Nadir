
import React from "react";
import ResumePage from "./components/ResumePage";
import resumeData from "./data/resumeData";
import "./styles/base.css";
import "./styles/print.css";
import "./themes/theme-default.css";

function App() {
  return (
    <>
      {resumeData.pages.map((page, index) => (
        <ResumePage key={index} page={page} />
      ))}
    </>
  );
}

export default App;
