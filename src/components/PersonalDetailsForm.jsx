function PersonalDetailsForm({fullName, email, phoneNumber, address}) {
    return (
        <form>
            <h1>Personal Details</h1>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" onChange={fullName}/>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" onChange={email}/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" onChange={phoneNumber}/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={address}/>
        </form>
    )
}

export default PersonalDetailsForm