function PersonalDetailsForm({fullName, email, phoneNumber, address}) {
    return (
        <form className="flex flex-col mb-10">
            <h1 className="text-xl font-bold">Personal Details Form</h1>
            <label htmlFor="fullName">Full Name</label>
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" id="fullName" onChange={fullName}/>
            <label htmlFor="email">E-Mail</label>
            <input className="border-2 border-solid border-black rounded-md w-40" type="email" id="email" onChange={email}/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" id="phoneNumber" onChange={phoneNumber}/>
            <label htmlFor="address">Address</label>
            <input className="border-2 border-solid border-black rounded-md w-40" type="text" id="address" onChange={address}/>
        </form>
    )
}

export default PersonalDetailsForm