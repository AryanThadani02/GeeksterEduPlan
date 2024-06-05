import React from "react";
import SubjectItem from "./SubjectItem";

function SubjectList({ subjects, updateSubjectHours }) {
  return (
    <ul>
      {subjects.map((subject, index) => (
        <SubjectItem
          key={index}
          subject={subject}
          index={index}
          updateSubjectHours={updateSubjectHours}
        />
      ))}
    </ul>
  );
}

export default SubjectList;
