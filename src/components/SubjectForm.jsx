import React, { useState } from "react";

function SubjectForm({ addSubject }) {
  const [name, setName] = useState("");
  const [hours, setHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && hours > 0) {
      addSubject(name, hours);
      setName("");
      setHours(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Subject Name"
        required
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
        placeholder="Study Hours"
        required
      />
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;
