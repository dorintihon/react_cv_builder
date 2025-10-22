const addInformation = (e) => {
    e.preventDefault();
   
}

function GeneralInfo({formData, setFormData}) {
    return <div className="generalInfo">
        <h2>General Information</h2>
        <form onSubmit={addInformation}>
            <label htmlFor="fName">First Name</label>
            <input 
                type="text" 
                id="fName" 
                name="fName"
                value={formData.fName}
                onChange={(e) => setFormData({...formData, fName: e.target.value})} 
                required />
            <br />
            <label htmlFor="lName">Last Name</label>
            <input 
                type="text" 
                id="lName" 
                name="lName" 
                value={formData.lName}
                onChange={(e) => setFormData({...formData, lName: e.target.value})} 
                required />
            <br />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required />
            <br />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                required />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default GeneralInfo;