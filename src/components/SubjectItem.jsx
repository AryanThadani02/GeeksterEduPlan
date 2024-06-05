import React from "react";

function SubjectItem({ subject, index, updateSubjectHours }) {
  const increaseHours = () => {
    updateSubjectHours(index, subject.hours + 1);
  };

  const decreaseHours = () => {
    if (subject.hours > 0) {
      updateSubjectHours(index, subject.hours - 1);
    }
  };

  return (
    <li>
      <span>{subject.name}</span>
      <span>{subject.hours} hours</span>
      <button onClick={increaseHours}>+</button>
      <button onClick={decreaseHours}>-</button>
    </li>
  );
}

export default SubjectItem;
