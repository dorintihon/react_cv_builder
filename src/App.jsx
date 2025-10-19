
import GeneralInfo from './GeneralInfo.jsx'
import EducationExperiencePage from './EduExpPage.jsx';
import CVPage from './CVPage.jsx'
import React from 'react';



function App() {
    const [formData, setFormData] = React.useState({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        education: []
    });

    return (
        <div>
            <GeneralInfo formData={formData} setFormData={setFormData} />
            <EducationExperiencePage formData={formData} setFormData={setFormData} />
            <CVPage formData={formData} />
        </div>
    );
}

export default App;