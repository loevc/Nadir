
import React from "react";
import EditableText from "./EditableText";

function Section({ section }) {
  return (
    <div className="section">
      <div className="section-title">{section.title}</div>
      {section.content.map((item, index) => (
        <EditableText key={index} value={item} />
      ))}
    </div>
  );
}

export default Section;
