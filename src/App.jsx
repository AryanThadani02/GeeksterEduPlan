import React, { useState, useEffect } from "react";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (subjects.length > 0) {
      localStorage.setItem("subject", JSON.stringify(subjects));
    }
  }, [subjects]);

  useEffect(() => {
    if (localStorage.getItem("subject")) {
      let array = JSON.parse(localStorage.getItem("subject"));
      setSubjects(array);
    }
  }, []);

  const addSubject = (name, hours) => {
    setSubjects([...subjects, { name, hours }]);
  };

  const updateSubjectHours = (index, hours) => {
    const newSubjects = [...subjects];
    newSubjects[index].hours = hours;
    setSubjects(newSubjects);
  };

  return (
    <div className="App">
      <h1>Education Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList
        subjects={subjects}
        updateSubjectHours={updateSubjectHours}
      />
    </div>
  );
}

export default App;
