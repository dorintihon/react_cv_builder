import './CVPage.css';

function CVPage({ formData }) {
  return (
    <div className="cvPageContainer">
      <h2>Curriculum Vitae</h2>

        <div className='infoSection'>
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

            <div>
                <h2>Practical Experience</h2>
                {formData.practicalExperience.length === 0 ? (
                <p>No practical experience added yet.</p>
                ) : (
                formData.practicalExperience.map((exp) => (
                    <div
                    key={exp.id}
                    >
                    <strong>{exp.jobTitle}</strong> at <strong>{exp.companyName}</strong>
                    <br />
                    <small>
                        {exp.startDate} → {exp.endDate || "Present"}
                    </small>
                        <br />
                        {exp.tasks && exp.tasks.length > 0 ? (
                            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                {exp.tasks.map((task) => (
                                    <li key={task.id}>{task.description}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No tasks added.</p>
                        )}
                    </div>
                ))
                )}
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
      
    </div>
  );
}

export default CVPage;
