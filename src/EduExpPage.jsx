function EducationExperiencePage() {
    return <div>
        <h2>Education</h2>
        <form>
            <label htmlFor="schoolName">School Name</label>
            <input type="text" id="schoolName" name="schoolName" required />
            <br />
            <label htmlFor="studyTitle">Title of Study</label>
            <input type="text" id="studyTitle" name="studyTitle" required />
            <br />
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" required />
            <br />
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" name="endDate" required />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default EducationExperiencePage;