function PersonalDetails() {

    return (
        <form>
            <h1>Personal Details</h1>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName"/>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email"/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber"/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"/>


        </form>
    )

}

export default PersonalDetails