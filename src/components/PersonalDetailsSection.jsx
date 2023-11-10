function PersonalDetailsSection({fullName, email, phoneNumber, address}) {
    return (
        <div className="personalDetailsSection">
            <div className="fullName">
                <p>Name: {fullName}</p>

            </div>
            <div className="email">
                <p>Email: {email}</p>

            </div>
            <div className="phoneNumber">
                <p>Phone Number: {phoneNumber}</p>

            </div>
            <div className="address">
                <p>Address: {address}</p>

            </div>
        </div>

    )

}

export default PersonalDetailsSection