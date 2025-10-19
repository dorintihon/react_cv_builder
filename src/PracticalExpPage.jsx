function PracticalExperiencePage() {
    return <div>
        <h2>Practical Experience</h2>
        <p>Do you have any experience?</p>
        <form action="/submit" method="post">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" required />
            <br />
            <label htmlFor="positionTitle">Position Title</label>
            <input type="text" id="positionTitle" name="positionTitle" required />
            <br />
            <label htmlFor="tasks">Responsibilities and Achievments</label>
            <input type="text" id="tasks" name="tasks" required />
            <br />
            <label htmlFor="workStartDate">Start Date</label>
            <input type="date" id="workStartDate" name="workStartDate" required />
            <br />
            <label htmlFor="workEndDate">End Date</label>
            <input type="date" id="workEndDate" name="workEndDate" required />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default PracticalExperiencePage;