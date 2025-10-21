import { useState } from "react";

const newEdu = () => ({
  id: crypto?.randomUUID?.() ?? String(Date.now() + Math.random()),
  schoolName: "",
  studyTitle: "",
  startDate: "",
  endDate: "",
});

function EducationExperiencePage({ formData, setFormData }) {
  const education = Array.isArray(formData.education) ? formData.education : [];
  const [eduInput, setEduInput] = useState(newEdu());

  const handleChange = (field, value) => {
    setEduInput((prev) => ({ ...prev, [field]: value }));
  };

  const addEducation = (e) => {
    e.preventDefault();
    if (!eduInput.schoolName.trim()) return;
    setFormData((prev) => ({
      ...prev,
      education: [...(prev.education || []), eduInput],
    }));
    setEduInput(newEdu());
  };

  const removeEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  return (
    <div>
      <h2>Education</h2>
      <form onSubmit={addEducation}>
        <label>School Name</label>
        <input
          type="text"
          value={eduInput.schoolName}
          onChange={(e) => handleChange("schoolName", e.target.value)}
          required
        />
        <br />

        <label>Title of Study</label>
        <input
          type="text"
          value={eduInput.studyTitle}
          onChange={(e) => handleChange("studyTitle", e.target.value)}
        />
        <br />

        <label>Start Date</label>
        <input
          type="date"
          value={eduInput.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
        />
        <br />

        <label>End Date</label>
        <input
          type="date"
          value={eduInput.endDate}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
        <br />

        <button type="submit">Add</button>
      </form>

      {/* List of added education entries */}
      <div style={{ marginTop: "1rem" }}>
        {education.length === 0 ? (
          <p>No education added yet.</p>
        ) : (
          education.map((edu) => (
            <div
              key={edu.id}
              style={{
                border: "1px solid #ddd",
                padding: "8px 12px",
                marginBottom: "8px",
                borderRadius: "6px",
              }}
            >
              <strong>{edu.schoolName}</strong> — {edu.studyTitle}
              <br />
              <small>
                {edu.startDate} → {edu.endDate || "Present"}
              </small>
              <br />
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EducationExperiencePage;
