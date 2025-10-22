import { useState } from "react";

const newExperience = () => ({
  id: crypto?.randomUUID?.() ?? String(Date.now() + Math.random()),
  companyName: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  tasks: [],
});

const newTask = () => ({
  id: crypto?.randomUUID?.() ?? String(Date.now() + Math.random()),
  description: "",
});


function PracticalExperiencePage({ formData, setFormData }) {
  const practicalExperience = Array.isArray(formData.practicalExperience)
    ? formData.practicalExperience
    : [];
  const [expInput, setExpInput] = useState(newExperience());
  const [taskInput, setTaskInput] = useState(newTask());

    const handleChange = (field, value) => {
        setExpInput((prev) => ({ ...prev, [field]: value }));
    };

    const addExperience = (e) => {
        e.preventDefault();
        if (!expInput.companyName.trim()) return;
        setFormData((prev) => ({
            ...prev,
            practicalExperience: [...(prev.practicalExperience || []), expInput],
        }));
        setExpInput(newExperience());
        
        setHasExperience(null);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (!taskInput.description.trim()) return;
        setExpInput((prev) => ({
            ...prev,
            tasks: [...(prev.tasks || []), taskInput],
        }));
        setTaskInput(newTask());
    };
    
    const removeExperience = (id) => {
        setFormData((prev) => ({
            ...prev,
            practicalExperience: prev.practicalExperience.filter((e) => e.id !== id),
        }));
    };
    const [hasExperience, setHasExperience] = useState(null);

    const question =
        practicalExperience.length > 0
            ? "Do you want to add more experience?"
            : "Do you have any experience?";

    return (
        <div>
            <h2>Practical Experience</h2>
            <p>{question}</p>
            <button onClick={() => setHasExperience(true)}>Yes</button>
            <button onClick={() => setHasExperience(false)}>No</button>


            {hasExperience === false && <p>No practical experience added.</p>}
            {hasExperience === true && (
                <form onSubmit={addExperience}>
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                        type="text" 
                        id="companyName" 
                        name="companyName"
                        value={expInput.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)} 
                        required />
                    <br />
                    <label htmlFor="jobTitle">Position Title</label>
                    <input 
                        type="text" 
                        id="jobTitle" 
                        name="jobTitle" 
                        value={expInput.jobTitle}
                        onChange={(e) => handleChange("jobTitle", e.target.value)}
                        required />
                    <br />
                    <label htmlFor="tasks">Responsibilities and Achievments</label>
                    <input 
                        type="text" 
                        id="tasks" 
                        name="tasks" 
                        value={taskInput.description}
                        onChange={(e) => setTaskInput(prev => ({ ...prev, description: e.target.value }))}
                    />
                    <br />
                    <button onClick={addTask}>add</button>
                    <label htmlFor="workStartDate">Start Date</label>
                    <input 
                        type="date" 
                        id="workStartDate" 
                        name="workStartDate" 
                        value={expInput.startDate}
                        onChange={(e) => handleChange("startDate", e.target.value)}
                        required />
                    <br />
                    <label htmlFor="workEndDate">End Date</label>
                    <input 
                        type="date" 
                        id="workEndDate" 
                        name="workEndDate" 
                        value={expInput.endDate}
                        onChange={(e) => handleChange("endDate", e.target.value)}
                        required />
                    <br />
                    <button type="submit">add</button>
                </form>
            )}

            {/* List of added practical experience entries */}
            <div style={{ marginTop: "1rem" }}>
                {practicalExperience.length === 0 ? (
                    <p>No practical experience added yet.</p>
                ) : (
                    practicalExperience.map((exp) => (
                        <div key={exp.id} style={{ marginBottom: "8px" }}>
                            <strong>{exp.companyName}</strong> — {exp.jobTitle}
                            <br />
                            {exp.startDate} to {exp.endDate}
                            <br />
                            <em>Tasks:</em>
                            {exp.tasks && exp.tasks.length > 0 ? (
                                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                    {exp.tasks.map((task) => (
                                        <li key={task.id}>{task.description}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No tasks added.</p>
                            )}
                            <button onClick={() => removeExperience(exp.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default PracticalExperiencePage;