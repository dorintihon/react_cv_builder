
import GeneralInfo from './GeneralInfo.jsx'
import CVPage from './CVPage.jsx'
import React from 'react';



function App() {
    const [formData, setFormData] = React.useState({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: ""
    });

    return (
        <div>
            <GeneralInfo formData={formData} setFormData={setFormData} />
            <CVPage formData={formData} />
        </div>
    );
}

export default App;