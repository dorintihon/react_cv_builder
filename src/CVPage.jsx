import './CVPage.css';

function CVPage({formData}) {
    return (
        <div>
            <h2>Curriculum Vitae</h2>
            <div className="cvPage">
                <div className="fullName">
                    <h2>{formData.fName}</h2>
                    <h2>{formData.lName}</h2>
                </div>
                <div className="contactInfo">
                    <p>{formData.email}</p>
                    <p>{formData.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default CVPage;