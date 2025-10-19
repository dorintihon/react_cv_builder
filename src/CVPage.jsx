import './CVPage.css';

function CVPage({ formData }) {
  return (
    <div>
      <h2>Curriculum Vitae</h2>

      <div className="genInfoSection">
        <div className="fullName">
          <h2>{formData.fName}</h2>
          <h2>{formData.lName}</h2>
        </div>

        <div className="contactInfo">
          <p>{formData.email}</p>
          <p>{formData.phoneNumber}</p>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h2>Education</h2>
        {formData.education.length === 0 ? (
          <p>No education added yet.</p>
        ) : (
          formData.education.map((edu) => (
            <div
              key={edu.id}
            >
              <strong>{edu.schoolName}</strong> — {edu.studyTitle}
              <br />
              <small>
                {edu.startDate} → {edu.endDate || "Present"}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CVPage;
