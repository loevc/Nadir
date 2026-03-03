
import React from "react";

function ResumeRenderer({ data }) {
  return (
    <div className="page">
      <h1>{data.name}</h1>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>

      {data.sections.map((section, index) => (
        <div key={index} className="section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ResumeRenderer;
