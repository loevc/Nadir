
import React from "react";

function EditableText({ value }) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className="editable"
    >
      {value}
    </div>
  );
}

export default EditableText;
