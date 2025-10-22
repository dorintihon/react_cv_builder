import GeneralInfo from './GeneralInfo.jsx'
import EducationExperiencePage from './EduExpPage.jsx';
import PracticalExperiencePage from './PracticalExpPage.jsx';
import CVPage from './CVPage.jsx'
import React from 'react';
import './App.css';



function App() {
    const [formData, setFormData] = React.useState({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        education: [],
        practicalExperience: []
    });

    return (
        <div className="appContainer">
            <div className='inputInfo'>
                <GeneralInfo formData={formData} setFormData={setFormData} />
                <EducationExperiencePage formData={formData} setFormData={setFormData} />
                <PracticalExperiencePage formData={formData} setFormData={setFormData} />
            </div>
            <div className='displayInfo'>
                <CVPage formData={formData} />
            </div>
        </div>
    );
}

export default App;