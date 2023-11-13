function PersonalDetailsForm({ fullName, email, phoneNumber, address }) {
  return (
    <form className="flex flex-col mb-10">
      <h1 className="text-xl font-bold">Personal Details Form</h1>
      <label htmlFor="fullName">Full Name</label>
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        id="fullName"
        onChange={fullName}
      />
      <label htmlFor="email">E-Mail</label>
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="email"
        id="email"
        onChange={email}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        id="phoneNumber"
        onChange={phoneNumber}
      />
      <label htmlFor="address">Address</label>
      <input
        className="w-40 border-2 border-black border-solid rounded-md"
        type="text"
        id="address"
        onChange={address}
      />
    </form>
  );
}

export default PersonalDetailsForm;
