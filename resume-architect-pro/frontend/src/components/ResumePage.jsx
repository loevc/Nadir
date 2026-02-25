
import React from "react";
import Section from "./Section";

function ResumePage({ page }) {
  return (
    <div className="resume-container">
      {page.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
}

export default ResumePage;
